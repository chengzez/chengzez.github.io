export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type LearningTrack = {
  label: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

export type ProjectCard = {
  label: string;
  title: string;
  description: string;
};

export type TimelineStep = {
  step: string;
  title: string;
  description: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href?: string;
  note: string;
};

export type HeroDetail = {
  title: string;
  description: string;
};

export const homeContent = {
  nav: [
    { label: "课程内容", href: "#overview" },
    { label: "课程体系", href: "curriculum.html" },
    { label: "教师阵容", href: "faculty.html" },
    { label: "咨询报名", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "面向初中生与高中生的 AI 与机器学习编程营",
    title: "让学生真正学会\nAI、编程与项目表达",
    description:
      "这是一个给 6-12 年级学生的中文 AI 编程课程。我们用家长能听懂、学生能跟上的方式，系统覆盖 Python、数据分析、机器学习、生成式 AI 与 AI 伦理，并通过真实项目把知识变成作品。",
    primaryAction: { label: "预约体验课", href: "#contact" },
    secondaryAction: { label: "查看课程内容", href: "#overview" },
    chips: [
      "全中文授课",
      "适合 6-12 年级",
      "小班项目制",
      "覆盖 AI 核心主题",
    ],
    details: [
      {
        title: "家长能看到什么",
        description: "不是只看课堂参与，而是能看到学生完成的代码、项目成果和展示表达。",
      },
      {
        title: "学生会怎么学",
        description: "每个阶段都有清晰主题，从编程基础进入数据、模型与真实 AI 应用场景。",
      },
      {
        title: "课程最终目标",
        description: "让学生不仅会用工具，更能理解原理、独立动手，并把项目讲清楚。",
      },
    ] satisfies HeroDetail[],
    signal: {
      label: "家长快速了解",
      title: "不是兴趣体验课，而是一套完整的 AI 学习路径",
      description: "目标不是让学生只“接触过 AI”，而是能理解、能动手、能讲清楚自己做了什么。",
    },
    curriculum: [
      "Python 编程基础",
      "数据分析与可视化",
      "机器学习入门",
      "生成式 AI 使用与判断",
      "计算机视觉基础",
      "AI 伦理与隐私",
    ],
    useCases: [
      "学习助手",
      "图像识别",
      "推荐系统",
      "数据故事",
    ],
  },
  metrics: [
    { value: "6-12", label: "覆盖中学阶段不同年级与起点" },
    { value: "6 大主题", label: "把 AI 重要内容系统学清楚" },
    { value: "项目输出", label: "每阶段都有作品和展示" },
  ] satisfies Metric[],
  overview: [
    {
      title: "学生会学什么",
      description: "Python、数据分析、机器学习、生成式 AI、计算机视觉，以及 AI 伦理与隐私这些核心主题。",
    },
    {
      title: "适合哪些学生",
      description: "适合想系统入门 AI 的初高中学生，也适合已经有基础、想做更完整项目和作品展示的学生。",
    },
    {
      title: "学完能得到什么",
      description: "不只是学过概念，而是完成真实项目、建立技术表达能力，并沉淀可以继续扩展的作品。",
    },
  ] satisfies Feature[],
  tracks: [
    {
      label: "阶段 01",
      title: "6-8 年级",
      subtitle: "建立兴趣、逻辑和编程基础",
      bullets: [
        "学习变量、循环、函数和简单算法",
        "理解 AI 如何利用数据做判断",
        "完成入门级项目并学会表达过程",
      ],
    },
    {
      label: "阶段 02",
      title: "9-10 年级",
      subtitle: "进入数据分析和机器学习实践",
      bullets: [
        "学习数据清洗、训练集与测试集",
        "搭建分类模型、推荐系统或文本分析原型",
        "完成可展示的 AI 项目 Demo",
      ],
    },
    {
      label: "阶段 03",
      title: "11-12 年级",
      subtitle: "面向更完整的项目、展示与作品积累",
      bullets: [
        "围绕真实问题设计 AI 方案",
        "完成更完整的结果分析与项目叙事",
        "训练展示、答辩与技术表达",
      ],
    },
  ] satisfies LearningTrack[],
  projects: [
    {
      label: "案例 01",
      title: "学习助手与智能问答",
      description: "让学生理解生成式 AI 的使用场景、优点与局限，并做出自己的学习工具原型。",
    },
    {
      label: "案例 02",
      title: "图像识别与计算机视觉",
      description: "通过图像分类项目，理解机器如何“看懂”图片，以及模型判断是如何产生的。",
    },
    {
      label: "案例 03",
      title: "推荐系统与兴趣匹配",
      description: "从学生最容易理解的推荐场景切入，学习数据如何支持个性化决策。",
    },
    {
      label: "案例 04",
      title: "环境与社会数据分析",
      description: "用真实数据做图表和故事，让学生看到 AI 与数据在现实世界中的价值。",
    },
  ] satisfies ProjectCard[],
  contact: {
    eyebrow: "联系与咨询",
    title: "想了解课程是否适合你的孩子，可以直接联系我们",
    description:
      "如果你想了解营期安排、课程难度、试听方式或适合的学习路径，可以直接留言，我们会尽快回复。",
    methods: [
      {
        label: "邮箱咨询",
        value: "zcz20000909123@gmail.com",
        href: "mailto:zcz20000909123@gmail.com",
        note: "适合课程咨询、试听预约与合作联系",
      },
      {
        label: "电话咨询",
        value: "(917) 287-5219",
        href: "tel:+19172875219",
        note: "适合快速确认营期、安排与试听时间",
      },
    ] satisfies ContactMethod[],
    form: {
      nameLabel: "学生或家长姓名",
      emailLabel: "联系邮箱",
      levelLabel: "学生年级",
      messageLabel: "想咨询的内容",
      captchaLabel: "请完成验证码",
      submitLabel: "发送咨询",
      successMessage: "咨询已发送，我们会尽快通过邮件联系你。",
      errorMessage: "发送失败，请稍后重试或直接发送邮件到 zcz20000909123@gmail.com。",
      configMessage: "请先配置 Static Forms API Key 和 reCAPTCHA Site Key。",
    },
  },
} as const;
