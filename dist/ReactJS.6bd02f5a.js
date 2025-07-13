const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1",
        key: "child1"
    }, React.createElement("h1", {}, "I am at h1 tag"), React.createElement("h2", {}, "I am at h2 tag")),
    React.createElement("div", {
        id: "child2",
        key: "child2"
    }, React.createElement("h1", {}, "I am at h1 tag"), React.createElement("h2", {}, "I am at h2 tag"))
]);
const headingSP = React.createElement("h2", {
    id: "heading",
    xyz: "abc"
}, "3rd July is the birthday for me !!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingSP);

//# sourceMappingURL=ReactJS.6bd02f5a.js.map
