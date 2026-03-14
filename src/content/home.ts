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

export const homeContent = {
  nav: [
    { label: "课程路径", href: "#tracks" },
    { label: "学生项目", href: "#projects" },
    { label: "教学体验", href: "#experience" },
    { label: "报名咨询", href: "#contact" },
  ] satisfies NavItem[],
  hero: {
    eyebrow: "面向初中生与高中生的 AI 与机器学习编程营",
    title: "把 AI 灵感\n变成学生今天就能做出来的作品",
    description:
      "星跃 AI 编程营围绕 Python、数据思维、机器学习和创意表达设计课程，让学生在中文环境里真正理解 AI、真正写出代码，并完成适合展示、适合申请、也适合继续升级的作品。",
    primaryAction: { label: "预约体验课", href: "mailto:zcz20000909123@gmail.com" },
    secondaryAction: { label: "立即咨询课程", href: "#contact" },
    chips: [
      "全中文授课",
      "适合初高中",
      "AI / ML 项目制",
      "作品展示导向",
      "可衔接竞赛与申请",
    ],
    signal: {
      label: "本期主线",
      title: "AI 创造力 x 项目表达力",
      description: "从第一行 Python 到第一个机器学习项目，用一整套成长路径建立兴趣、能力与未来方向。",
    },
    spotlight: [
      {
        title: "AI 启蒙",
        description: "用游戏化任务理解逻辑、变量、循环与数据。",
      },
      {
        title: "机器学习",
        description: "学习训练集、分类模型、准确率与模型优化。",
      },
      {
        title: "作品展示",
        description: "完成个人项目演示，训练表达、自信和技术叙事。",
      },
    ] satisfies Feature[],
  },
  metrics: [
    { value: "3 条", label: "成长路径覆盖初中启蒙到高中进阶" },
    { value: "6+ 个", label: "AI 与机器学习项目可真实产出" },
    { value: "12 人", label: "小班制互动，保障学生获得反馈" },
    { value: "100%", label: "中文讲解，降低理解门槛" },
  ] satisfies Metric[],
  reasons: [
    {
      title: "不是只学语法",
      description:
        "学生会真正理解代码如何驱动图像分类、数据分析与智能应用，而不是停留在零散知识点。",
    },
    {
      title: "面向青少年的学习设计",
      description:
        "课程节奏更适合初高中学生，用视觉化案例、互动式任务和项目拆解帮助学生跟上并保持成就感。",
    },
    {
      title: "兼顾兴趣和未来方向",
      description:
        "既能作为 AI 启蒙，也能为竞赛、项目展示、作品集和更深入的技术探索打下基础。",
    },
  ] satisfies Feature[],
  tracks: [
    {
      label: "路径 01",
      title: "AI 探索者",
      subtitle: "适合初中生或刚接触编程的学生",
      bullets: [
        "认识 Python、变量、循环与条件判断",
        "通过小游戏和可视化任务建立编程兴趣",
        "理解“数据如何帮助机器做判断”",
        "完成第一个 AI 小实验与成果展示",
      ],
    },
    {
      label: "路径 02",
      title: "机器学习实践者",
      subtitle: "适合高中生或已经有基础的学生",
      bullets: [
        "学习数据清洗、特征、训练集与测试集",
        "搭建图像分类、文本分析或推荐模型",
        "理解准确率、过拟合与模型优化",
        "完成个人 AI 项目并进行公开演示",
      ],
    },
    {
      label: "路径 03",
      title: "创新项目挑战者",
      subtitle: "适合作品集、竞赛或科研兴趣提升",
      bullets: [
        "围绕真实问题设计 AI 解决方案",
        "完成更完整的数据故事与项目叙事",
        "练习项目汇报、答辩与技术表达",
        "沉淀可继续扩展的作品集雏形",
      ],
    },
  ] satisfies LearningTrack[],
  projects: [
    {
      label: "项目 01",
      title: "手写数字识别器",
      description: "从图像数据出发，理解机器如何识别数字与图案，建立机器学习的第一性认识。",
    },
    {
      label: "项目 02",
      title: "校园兴趣推荐系统",
      description: "结合学生兴趣数据，设计一个推荐社团、书单或学习方向的轻量 AI 应用。",
    },
    {
      label: "项目 03",
      title: "AI 学习助手",
      description: "尝试构建会总结、分类或回答问题的学习工具，建立产品思维与交互意识。",
    },
    {
      label: "项目 04",
      title: "数据故事实验室",
      description: "围绕校园、环境、运动或社会议题，用图表、洞察与叙事讲出一个完整故事。",
    },
  ] satisfies ProjectCard[],
  experience: {
    timeline: [
      {
        step: "01",
        title: "小班互动实时指导",
        description: "控制班级人数，让每位学生都能提问、共享屏幕并在关键节点获得帮助。",
      },
      {
        step: "02",
        title: "项目式作业与反馈",
        description: "每周围绕一个明确目标推进，老师会对代码质量、思路和表达方式给出反馈。",
      },
      {
        step: "03",
        title: "阶段展示与复盘",
        description: "通过展示、讲解和提问把学习真正内化，让学生不仅会做，也能说清楚。",
      },
    ] satisfies TimelineStep[],
    panelTitle: "更适合 AI 时代青少年的学习方式",
    panelBullets: [
      "中文讲解 AI 概念，减少陌生术语带来的压力",
      "强调创造力、问题拆解与项目完成度",
      "兼顾兴趣培养、学术进阶与未来方向探索",
    ],
    panelAction: { label: "联系导师团队", href: "mailto:zcz20000909123@gmail.com" },
  },
  contact: {
    eyebrow: "联系与咨询",
    title: "想了解营期、课程匹配或试听安排，可以直接给我们留言",
    description:
      "这个表单适合 GitHub Pages 静态网站使用，提交后会直接发送到你的收件邮箱。你也可以直接通过邮箱联系；电话位目前留了占位，等你给我号码后我可以立刻替换。",
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
        note: "适合快速确认课程安排、营期和试听时间",
      },
    ] satisfies ContactMethod[],
    form: {
      nameLabel: "学生或家长姓名",
      emailLabel: "联系邮箱",
      levelLabel: "学生年级",
      messageLabel: "想咨询的内容",
      submitLabel: "发送咨询",
      successMessage: "咨询已发送，我们会尽快通过邮件联系你。",
      errorMessage: "发送失败，请稍后重试或直接发送邮件到 zcz20000909123@gmail.com。",
      configMessage: "请先在 GitHub Actions 中配置 Static Forms 的 Access Key。",
    },
  },
  cta: {
    eyebrow: "咨询报名",
    title: "把这个主页变成真正能招生、能展示、也能直接接收咨询的 AI 编程营入口",
    description:
      "适合寒暑假营、周末班、项目制训练营或 AI 启蒙课程展示页。现在这版已经适配 React、GitHub Pages 和静态表单服务，后面继续扩展课程详情页会更轻松。",
    primaryAction: { label: "立即咨询", href: "#contact" },
    secondaryAction: { label: "返回顶部", href: "#top" },
  },
} as const;
