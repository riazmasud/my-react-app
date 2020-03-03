import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import { all } from "redux-saga/effects";
function* ageUpAsync() {
  console.log("hi");
  //yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  console.log("hellooo");
  yield takeLatest("AGE_UP_USING_SAGA", ageUpAsync);
}

function* ageDownAsync() {
  //yield delay(4000);
  yield put({ type: "AGE_DOWN_ASYNC", value: 1 });
}

export function* watchAgeDown() {
  console.log("hello");
  yield takeLatest("AGE_DOWN_USING_SAGA", ageDownAsync);
}

export function* rootSaga() {
  yield all([watchAgeUp, watchAgeDown]);
}
