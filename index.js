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
  production_category: "产品",
  production1_description: "内置全节点的 Nervos 资产客户端",
  production2_description: "Nervos CKB 区块浏览器",
  production3_description: "以太坊兼容层区块浏览器",
  production4_description: "提供 Java/Go/Js 等 SDK 和技术支持",
  job_category: "开发职位",
  job1_title: "技术开发总监",
  job1_name: "技术开发总监",
  job1_responsibilities: "1. 在 Nervos CKB 上设计和实现智能合约\n 2. 在 Nervos CKB 生态系统中探索和构建各种 dapp",
  job1_qualifications: "1. 3年以上的软件开发经验\n 2. 熟练使用 Rust 语言，熟悉 C/C++\n 3. 良好的代码风格和书写习惯，对代码质量有一定追求",
  job2_title: "产品运营总监",
  job2_name: "产品运营总监",
  job2_responsibilities: "1. 在 Nervos CKB 上设计和实现智能合约\n 2. 在 Nervos CKB 生态系统中探索和构建各种 dapp",
  job2_qualifications: "1. 3年以上的软件开发经验\n 2. 熟练使用 Rust 语言，熟悉 C/C++\n 3. 良好的代码风格和书写习惯，对代码质量有一定追求",
  job3_title: "Rust 高级开发工程师",
  job3_name: "Rust 高级开发工程师",
  job3_responsibilities: "1. 在 Nervos CKB 上设计和实现智能合约\n 2. 在 Nervos CKB 生态系统中探索和构建各种 dapp",
  job3_qualifications: "1. 3年以上的软件开发经验\n 2. 熟练使用 Rust 语言，熟悉 C/C++\n 3. 良好的代码风格和书写习惯，对代码质量有一定追求",
  job4_title: "Java / Golang 高级开发工程师",
  job4_name: "Java / Golang 高级开发工程师",
  job4_responsibilities: "1. 在 Nervos CKB 上设计和实现智能合约\n 2. 在 Nervos CKB 生态系统中探索和构建各种 dapp",
  job4_qualifications: "1. 3年以上的软件开发经验\n 2. 熟练使用 Rust 语言，熟悉 C/C++\n 3. 良好的代码风格和书写习惯，对代码质量有一定追求",
  job5_title: "前端高级工程师",
  job5_name: "前端高级工程师",
  job5_responsibilities: "1. 在 Nervos CKB 上设计和实现智能合约\n 2. 在 Nervos CKB 生态系统中探索和构建各种 dapp",
  job5_qualifications: "1. 3年以上的软件开发经验\n 2. 熟练使用 Rust 语言，熟悉 C/C++\n 3. 良好的代码风格和书写习惯，对代码质量有一定追求",
  job6_title: "区块链产品经理",
  job6_name: "区块链产品经理",
  job6_responsibilities: "1. 在 Nervos CKB 上设计和实现智能合约\n 2. 在 Nervos CKB 生态系统中探索和构建各种 dapp",
  job6_qualifications: "1. 3年以上的软件开发经验\n 2. 熟练使用 Rust 语言，熟悉 C/C++\n 3. 良好的代码风格和书写习惯，对代码质量有一定追求",
  job7_title: "技术 BD 经理",
  job7_name: "技术 BD 经理",
  job7_responsibilities: "1. 在 Nervos CKB 上设计和实现智能合约\n 2. 在 Nervos CKB 生态系统中探索和构建各种 dapp",
  job7_qualifications: "1. 3年以上的软件开发经验\n 2. 熟练使用 Rust 语言，熟悉 C/C++\n 3. 良好的代码风格和书写习惯，对代码质量有一定追求",
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

function gotoGithub(repository) {
  switch (repository) {
    case "neuron":
      window.open("https://github.com/nervosnetwork/neuron");
      break;
    case "ckb-explorer":
      window.open("https://github.com/nervosnetwork/ckb-explorer");
      break;
    case "godwoken-explorer":
      window.open("https://github.com/nervina-labs/godwoken_explorer");
      break;
    case "ckb-sdk-java":
      window.open("https://github.com/nervosnetwork/ckb-sdk-java");
      break;
    case "ckb-sdk-js":
      window.open("https://github.com/nervosnetwork/ckb-sdk-js");
      break;
    case "ckb-sdk-go":
      window.open("https://github.com/nervosnetwork/ckb-sdk-go");
      break;
    case "ckb-sdk-ruby":
      window.open("https://github.com/nervosnetwork/ckb-sdk-ruby");
      break;
    default:
      break;
  }
}

function gotoWebsite(website) {
  switch (website) {
    case "ckb-explorer":
      window.open("https://explorer.nervos.org");
      break;
    case "godwoken-explorer":
      window.open("https://explorer.nervos.org");
      break;
    default:
      break;
  }
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
})();
