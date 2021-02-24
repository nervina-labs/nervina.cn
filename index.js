const data = {
  title: "Nervina Labs",
  subject_title: "服务真实业务需求的区块链技术推广者",
  subject_description:
    "Nervina Labs 由 Nervos 核心应用开发者创立。我们致力于服务中国市场、推动先进区块链技术的落地并为传统互联网应用赋能。",
  solution1_title: "零门槛账户",
  solution1_description:
    "帮助互联网应用实现零门槛的区块链账户创建方案，用户无需复杂的助记词、长密码、公私钥对等基础知识的学习，直接以互联网应用的操作体验创建安全、去中心化和自托管的区块链账户。",
  solution2_title: "零摩擦交易",
  solution2_description:
    "终端用户操作区块链账户无需持有或购买代币，无需支付手续费。在提供区块链带来的开放性、可组合性和更多的业务可能性的同时，不增加用户成本、不引入监管风险。",
  solution3_title: "可交换开放凭证",
  solution3_description:
    "EOP(Exchangeable Open Proof)为电子票证、商品预售、粉丝经济、版权分发、艺术品拍卖等等行业提供支持全生命周期的区块链凭证标准。应用方在不修改原业务核心流程的前提下，机遇区块链构建自己的应用生态。第三方开发者围绕着用户和 EOP 提供服务，为平台和用户带来价值。",
  production1_title: "Neuron",
  production1_description: "内置全节点的 Nervos 资产客户端",
  production2_title: "CKB Explorer",
  production2_description: "Nervos CKB 区块浏览器",
  production3_title: "Polyguice Explorer",
  production3_description: "以太坊兼容层区块浏览器",
  production4_title: "Nervos SDK",
  production4_description: "提供 Java/Go/Js 等 SDK 和技术支持",
  job1_title: "技术开发总监",
  job1_description: "",
  job2_title: "产品运营总监",
  job2_description: "",
  job3_title: "Rust 高级开发工程师",
  job3_description: "",
  job4_title: "Java / Golang 高级开发工程师",
  job4_description: "",
  job5_title: "前端高级工程师",
  job5_description: "",
  job6_title: "区块链产品经理",
  job6_description: "",
  job7_title: "技术 BD 经理",
  job7_description: "",
};

function displayElementValue(id, value) {
  let element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

function keyToElementId(key) {
  return key.replace("_", "-");
}

(function displayElements() {
  for (key in data) {
    displayElementValue(keyToElementId(key), data[key]);
  }
})();
