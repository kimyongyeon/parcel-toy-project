var name = "...";

var getName = function () {
  var name = "getName...";
  eval("getPhone();"); // 동적 호출
  console.log("name = " + name);
  getPhone(); // 정적 호출
};

function funProc(name) {
  eval("get" + name + "()");
  for (let i = 1; i < 6; i++) {
    eval("setSeq" + i + "()");
  }
}

funProc("Insert");
funProc("Update");
funProc("Delete");

function setSeq1() {}
function setSeq2() {}
function setSeq3() {}
function setSeq4() {}
function setSeq5() {}

function getInsert() {
  console.log("Insert called");
}
function getUpdate() {
  console.log("Update called");
}

function getDelete() {
  console.log("Delete called");
}

var getPhone = function () {
  //this.name;
  console.log("getPhone called");
};

getName();
