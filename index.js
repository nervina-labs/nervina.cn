const data = {
  title: "Nervina Labs",
  subject_title: "为信息互联网提供价值网络基础设施",
  subject_description:
    "Nervina Labs 是杭州节点互信科技有限公司旗下的区块链价值网络实验室，致力于服务中国市场、推动区块链技术的落地并为传统互联网应用赋能。",
  solution1_title: "可交换开放凭证",
  solution1_description:
    "EOP(Exchangeable Open Proof)为电子票证、商品预售、粉丝经济、版权分发、艺术品拍卖等等行业提供支持全生命周期的区块链凭证标准。应用方在不修改原业务核心流程的前提下，基于区块链构建自己的应用生态。第三方开发者围绕着用户和 EOP 提供服务，为平台和用户带来价值。",
  solution2_title: "零门槛自主账户",
  solution2_description:
    "面向互联网应用的零门槛的区块链账户创建方案，用户无需复杂的助记词、长密码、公私钥对等基础知识的学习，直接以互联网应用的操作体验创建安全、去中心化和自托管的区块链账户。",
  solution3_title: "零摩擦无缝体验",
  solution3_description:
    "用户操作区块链账户无需支付手续费，也无需持有或购买代币。在提供区块链带来的开放性、可组合性和更多创新可能性的同时，不增加用户成本、不引入监管风险。",
  production_category: "产品",
  production1_description: "内置 Nervos CKB 全节点的资产客户端",
  production2_description: "Nervos CKB 区块数据浏览器",
  production3_description: "Nervos Layer 2 以太坊兼容层区块浏览器",
  production4_description: "提供 Java/Go/JavaScript/Ruby 等 SDK 和技术开发文档",
  job1: "市场总监",
  job1_name: "市场总监",
  job1_responsibilities:
    "1. 根据公司发展规划，制定产品市场定位、宣传规划与市场策略\n 2. 负责制定对外 PR，发布会计划以及线上线下活动\n 3. 开拓、建立与维护重点媒体关系，制定危机预警管理及处置计划",
  job1_qualifications:
    "1. 本科及以上学历，拥有五年及以上互联网行业市场宣传香港从业经验，具备一定的行业资源\n 2. 性格开朗，亲和力、沟通能力强，具备较强的市场开拓热情，喜欢有挑战性的工作",
  job2: "商务拓展经理",
  job2_name: "商务拓展经理",
  job2_responsibilities:
    "1. 负责与多个垂直领域的互联网企业沟通，尝试将公司解决方案与对方业务进行落地结合\n 2. 负责进行商务洽谈、技术衔接并达成最终合作\n 3. 重要客户问题的收集、反馈并解决\n 4. 维护好重点客户的关系，保证客户的留存率\n 5. 发行新的 BD 对象，拓展业务边界",
  job2_qualifications:
    "1. 本科及以上学历，拥有三年及以上互联网行业商务推广相关从业经验，具有一定的企业客户资源\n 2. 发展新的 BD 对象，拓展业务边界\n 3. 具有较强的独立思考能力，善于分析各方价值点，目标意识强",
  copyright: "Nervina Labs All Rights Reserved.",
};

function gotoElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: "smooth"});
  }
}

function gotoTop() {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function gotoTopAndCloseHeaderPanel() {
  gotoTop();
  closeHeaderPanel();
}

function closeHeaderPanel() {
  const element = document.getElementById("menus-panel");
  if (element) {
    element.classList.add("close-element");
  }
}

function openHeaderPanel() {
  const element = document.getElementById("menus-panel");
  if (element) {
    element.classList.remove("close-element");
  }
}

function gotoElementAndCloseHeaderPanel(id) {
  gotoElement(id);
  closeHeaderPanel();
}

function controlJobDetail(id, isShow) {
  const element = document.getElementById(id);
  const arrowImg = document.getElementById(`${id}-arrow`);
  if (element && arrowImg) {
    if (isShow) {
      element.classList.remove("close-element");
      element.classList.add("open-element");
      localStorage.setItem(id, "1");
      arrowImg.classList.add("job-arrow-rotate");
    } else {
      element.classList.remove("open-element");
      element.classList.add("close-element");
      localStorage.setItem(id, "0");
      arrowImg.classList.remove("job-arrow-rotate");
    }
  }
}

function toggleJobDetail(id) {
  const jobStatus = localStorage.getItem(id);
  controlJobDetail(id, jobStatus === null || jobStatus === "0");
}

function closeJobDetail(id) {
  controlJobDetail(id, false);
}

function displayElementValue(id, value) {
  let element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

function keyToElementId(key) {
  return key.replace("_", "-");
}

function updateElementValue(key, value) {
  if (key === "copyright") {
    return `Copyright © ${new Date().getFullYear()} ${value}`;
  }
  return value;
}

(function displayElements() {
  for (key in data) {
    displayElementValue(keyToElementId(key), updateElementValue(key, data[key]));
  }
  if (location.hash) {
    let elementHash = location.hash.replace("#", "");
    gotoElement(elementHash);
  }
})();
