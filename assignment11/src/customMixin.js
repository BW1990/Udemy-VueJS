export const customMixin = {
  data() {
    return {
      text: "Reverse Me"
    }
  },
  computed: {
    reversedText() {
      return this.text.split("").reverse().join("");
    },
    textLength() {
      return this.text + " (" + this.text.length + ")";
    }
  }
}
