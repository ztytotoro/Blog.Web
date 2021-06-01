import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";

Object.defineProperty(globalThis, "MonacoEnvironment", {
  value: {
    getWorker(_: string, _label: string) {
      return new EditorWorker();
    },
  },
});