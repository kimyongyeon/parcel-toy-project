
// 환경변수 설정 : 시컨스 초기화
var autoRetryCnt = AutoRetryCnt(0);

function countToSecondConvert(i) {
    return i * 1000;
}

function AutoRetryCnt(cnt) {
    return function() {
        return cnt++;
    }
}

function serverRetryDumyCount() {
    return Math.random() % 2 === 0 ? true : false;
}

function timeoutCalcExecute(callback) {
    // var retryCnt = serverRetryDumyCount() ? 1: autoRetryCnt();
    var retryCnt = parseInt(Math.random() * 10, 10);
    return (function (i) {
        // 복잡한 계산 로직은 밖으로 빼는게 좋다.
        // 시컨스에 따라서 시간을 계산한다.
        var delay = countToSecondConvert(i); // [0, 1, 2] -> [0, 1000, 2000]
        console.log("retryCnt :: ", retryCnt, "delay :: ", delay)
        // callback 함수를 외부에서 받는다.
        var timeout = setTimeout(() => callback(delay), delay);
        return timeout; // clearTimeout 사용을 위해 return 한다.
    })(retryCnt);
}

function clearAllTimeout() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
}

var timeout1 = timeoutCalcExecute(function(delay) {
    clearAllTimeout();
    console.log("1 delay :: ", delay);
})
var timeout2 = timeoutCalcExecute(function(delay) {
    clearAllTimeout();
    console.log("2 delay :: ", delay);
})
var timeout3 = timeoutCalcExecute(function(delay) {
    clearAllTimeout()
    console.log("3 delay :: ", delay);
})

// console.log(clearTimeout(calc(1)));
// console.log(calc(2));
// console.log(calc(3));

//
// var cnt = new AutoSeq(5);
// for (var i=0; i<3; i++) {
//     console.log(cnt());
// }

var Tw = {};
Tw.ValidationHelper = (function() {
    function AutoSeq(initSeq) {
        return function() {
            return initSeq++;
        }
    }
    var seq = AutoSeq(1);
    function print() {
        console.log(seq());
    }
    return {
        print: print,
    }
})();

// Tw.ValidationHelper.print();
// Tw.ValidationHelper.print();
// Tw.ValidationHelper.print();
// Tw.ValidationHelper.print();

