var add = require('../../src/add.js');
var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
// var request = require("supertest");
describe('加法函数的测试', function() {
  it('1 加 1 等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
  it('请求数据库列表接口成功', done => {
    chai
      .request("http://localhost:1010")
      .post('/djtest/projectConfig/listDataBase.do')
      .set('Content-Type', 'application/json')
      .send({
        'fprojectId': '',
        'fsort': '',
        'pagenum': 1,
        'pagesize': 10
      })
      .end((err, res) => {
        if (err) {
          done();
        }
        let data = JSON.parse(res.text);
        expect(data.success).to.be.true;
        done();
      });
  });
  // it("请求数据库列表接口-supertest", done => {
  //   request("http://localhost:1010")
  //     .post("/djtest/projectConfig/listDataBase.do")
  //     .set("Content-Type", "application/json")
  //     .send({
  //       fprojectId: "",
  //       fsort: "",
  //       pagenum: 1,
  //       pagesize: 10
  //     })
  //     .expect(200)
  //     .end((err, res) => {
  //       console.log(err);
  //       console.log(res);
  //       done();
  //     });
  // });
});