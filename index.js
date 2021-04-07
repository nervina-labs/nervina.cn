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

  job1_title: "前端开发工程师",
  job1_name: "前端开发工程师",
  job1_responsibilities:
    "1. 根据产品需求高质量完成 Web 应用以及 Electron 应用\n 2. 对具体产品进行性能优化\n 3. 维护团队的工具链\n 4. 对可复用组件进行抽象并独立维护",
  job1_qualifications:
    "1. 具备良好的前端开发技能, 熟悉 HTML, CSS 和 TypeScript, 了解 Web 标准化(可访问性, 安全性)\n 2. 在泛前端范围有开发经验, 比如 Node 应用, Electron 应用\n 3. 熟练使用前端的各种工具, 比如各类脚手架, CSS 处理器, 模板引擎\n  4. Web 技术栈偏向 React 及 TypeScript",
  job1_preferred_qualifications: "1. 具有开源项目经验\n 2. 提供 GitHub 或技术博客\n 3. 有区块链产品开发经验",

  job2_title: "市场运营总监",
  job2_name: "市场运营总监",
  job2_responsibilities:
    "1. 整理产品核心故事、设计品牌定位、制定市场策略\n 2. 结合产品业务进行策划，制定并执行新媒体平台传播\n 3. 关注策划方案的落地实施，定期复盘持续改进\n 4. 策划内容包括：文案策划、视频策划、专题策划、线下活动策划等",
  job2_qualifications:
    "1. 本科及以上学历，2-3年品牌策划工作经验\n 2. 理解能力强，能够快速掌握新的产品业务逻辑，具备较强的商业敏感度\n 3. 擅于沟通，具备良好的协作态度，具有对事不对人的情商理解力",

  job3_title: "产品(运营)经理",
  job3_name: "产品(运营)经理",
  job3_responsibilities:
    "1. 结合公司业务发展阶段，确定产品功能的核心业务指标及定义\n 2. 收集整理用户反馈，持续跟踪和分析产品、运营效果，归纳总结产品问题，提出策略优化方向，并推进产研部门迭代\n 3. 负责建立业务分析框架体系与数据增长模型，监控/发现问题，产出数据分析报告，提出改进方案\n 4. 针对新功能产出产品使用说明文档，通过已有渠道推广用户使用\n 5. 分析指标数据和用户行为数据，找到问题点、增长点并协调相关部门推进执行",
  job3_qualifications:
    "1. 本科以上学历，有3年以上内容社区、社交平台相关产品设计、运营经验\n 2. 熟悉区块链领域者优先\n 3. 熟练使用至少一种数据统计分析工具；能独立完成分析并输出报告，善于从数据中挖掘用户需求，有实验和迭代意识\n 4. 具有较强的沟通、协作能力，自驱、担当力高，能推动相关部门配合行动",

  job4_title: "商务拓展经理",
  job4_name: "商务拓展经理",
  job4_responsibilities:
    "1. 独立完成商务谈判及售前交流，规划合作项目计划及进度执行，并完成从合作洽谈、条款协商及合同签订等商务事宜\n 2. 维护良好的客户关系，定期拜访客户，及时跟进项目进展，把握客户需求及项目情况\n 3. 跟踪行业最新动态，收集整理行业内客户及市场信息，发现机会并形成报告，为决策提供依据",
  job4_qualifications:
    "1. 客户管理/BD相关工作经验两年以上\n 2. 性格开朗，善于沟通，责任心强，思维敏捷，具有较强学习能力和团队合作精神\n 3. 对市场信息、行业动态具有敏锐的洞察力\n 4. 有一定抗压能力，能够适应长期出差",
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

function openJobDetail(id) {
  if (id.startsWith("job")) {
    controlJobDetail(`${id}-detail`, true);
    setTimeout(() => {
      window.scrollBy({
        top: -58,
        left: 0,
        behavior: "smooth",
      });
    }, 20);
  }
}

function displayElementValue(id, value) {
  let element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

function keyToElementId(key) {
  return key.replaceAll("_", "-");
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
    const id = location.hash.replace("#", "");
    openJobDetail(id);
    gotoElement(id);
  }
})();
