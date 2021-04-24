const { averageExams, isStudentPassExam } = require("../gradeCalculations");
// berjalan bersmaan unit test & integration test
describe("grade calculations", () => {
  /*
   *unit test
   */
  test("it should return extact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
  });
  /*
   *integration test
   */
  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 40, 70, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false);
  });
});

// const { averageExams } = require("../gradeCalculations");
// test("it should return extact average", () => {
//   const listValueOfExams = [80, 100, 100, 80];
//   expect(averageExams(listValueOfExams)).toEqual(90);
// });

// multiple case
// test("it should handle non-number ", () => {
//   const listValueOfExams = [80, "a", "100", 80];
//   expect(() => averageExams(listValueOfExams)).toThrow();
// });

/**
 *
 * melihat laporan kode = npm run test -- --coverage
 *
 * **/
