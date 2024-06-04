class MyAppTheme {
    currentTheme: String;

    constructor(theme: String) {
        this.currentTheme = theme;
    }

    setTheme(theme: string) {
        this.currentTheme = theme;
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}
const MyTheme = new MyAppTheme("dark");

export default MyTheme;