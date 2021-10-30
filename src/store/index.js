import { createStore } from "vuex";
import {
  RegisterDialog,
  ShowModal,
  CloseModal,
  SetMode,
  UpdateRule,
  UpdateGen,
  Sketch,
} from "@/store/actionTypes";
import { IsMainShow, Mode, Rule, Gen } from "@/store/getterTypes";

export default createStore({
  state: {
    isMainShow: true,
    dialogElem: undefined,
    mode: "",
    rule: 30,
    gen: 0,
  },
  getters: {
    [IsMainShow](state) {
      return state.isMainShow;
    },
    [Mode](state) {
      return state.mode;
    },
    [Rule](state) {
      return state.rule;
    },
    [Gen](state) {
      return state.gen;
    },
  },
  mutations: {
    isMainShow(state) {
      state.isMainShow = !state.isMainShow;
    },
    registerDialog(state, dialogElem) {
      state.dialogElem = dialogElem;
    },
    setMode(state, mode) {
      state.mode = mode.toLowerCase();
    },
    updateRule(state, rule) {
      state.rule = Number(rule !== "" ? rule : state.rule);
    },
    updateGen(state, gen) {
      state.gen = gen;
    },
  },
  actions: {
    async [RegisterDialog]({ commit }, { dialogElem, cancelHandler }) {
      const dialogPolyfill = await (await import("dialog-polyfill")).default;
      dialogPolyfill.registerDialog(dialogElem);
      commit("registerDialog", dialogElem);
      dialogElem.addEventListener("cancel", (e) => {
        e.preventDefault();
        cancelHandler();
      });
    },
    [ShowModal]({ commit, state }) {
      commit("isMainShow");
      state.dialogElem.showModal();
    },
    [CloseModal]({ commit, state }, rule) {
      commit("setMode", rule ? "input" : "random");
      commit("updateRule", rule);
      commit("isMainShow");
      state.dialogElem.close();
    },
    [SetMode]({ commit }, mode) {
      commit("setMode", mode);
    },
    [UpdateRule]({ commit }, rule) {
      commit("updateRule", rule);
    },
    [UpdateGen]({ commit }, gen) {
      commit("updateGen", gen);
    },
    async [Sketch]({ commit, state }, { node, startSelectors }) {
      const sketch = (p) => {
        const pixelSize = 2;
        let spaceSize = 0;
        let maxGen = 0;
        let eca = undefined;

        const randomRule = () => Math.floor(Math.random() * 256);

        const visualizer = (state, gen) => {
          state.forEach((pixel, pixelIndex) => {
            if (pixel !== 1) return;
            p.fill("#58f898");
            p.rect(
              pixelIndex * pixelSize,
              (gen - 1) * pixelSize,
              pixelSize,
              pixelSize
            );
          });
        };

        const init = () => {
          const { clientWidth: canvasWidth, clientHeight: canvasHeight } = node;
          spaceSize = canvasWidth / pixelSize;
          maxGen = p.round(canvasHeight / pixelSize);
          return [canvasWidth, canvasHeight];
        };

        const start = async (e) => {
          p.clear();
          const ECA = await (await import("@/js/ECA")).default;
          const initialState = e.target.value;

          if (state.mode === "random") {
            commit("updateRule", randomRule());
          }
          const rule = state.rule;

          eca = new ECA(rule, spaceSize, initialState);
          visualizer(eca.state, eca.gen);
          commit("updateGen", eca.gen);
          p.loop();
        };

        p.setup = () => {
          const [canvasWidth, canvasHeight] = init();
          const cv = p.createCanvas(canvasWidth, canvasHeight);
          cv.style("display", "block");
          p.selectAll(startSelectors).forEach((selector) =>
            selector.mouseClicked(start)
          );
        };

        p.draw = () => {
          if (!eca || eca.gen > maxGen) return p.noLoop();
          eca.generate();
          visualizer(eca.state, eca.gen);
          commit("updateGen", eca.gen);
        };

        p.windowResized = () => {
          p.noLoop();
          p.clear();
          p.noCanvas();
          const [canvasWidth, canvasHeight] = init();
          p.createCanvas(canvasWidth, canvasHeight);
          commit("updateGen", 0);
        };
      };
      const P5 = await (await import("p5")).default;
      new P5(sketch, node);
    },
  },
  modules: {},
});
