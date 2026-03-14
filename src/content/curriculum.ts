import type { NavItem } from "./home";

export type CurriculumSection = {
  title: string;
  description: string;
  courses: {
    name: string;
    summary: string;
    bullets?: string[];
    note?: string;
  }[];
};

export const curriculumNav = [
  { label: "首页", href: "index.html" },
  { label: "课程体系", href: "curriculum.html" },
  { label: "教师阵容", href: "faculty.html" },
  { label: "咨询报名", href: "index.html#contact" },
] satisfies NavItem[];

export const curriculumContent = {
  hero: {
    eyebrow: "课程 Curriculum",
    title: "从编程基础到 AI 应用，把学习路径拆成清楚的课程体系",
    description:
      "这页更适合家长和学生详细了解课程安排。我们参考了真实编程课程体系的结构，把基础编程、应用开发、算法进阶和 AI 专题串联起来，并翻译整理成更适合中文家庭理解的版本。",
  },
  quickFacts: [
    "适合 6-12 年级学生按基础分层进入",
    "课程覆盖 Python、Java、Web、AI 与数据方向",
    "每个阶段都强调项目输出与表达能力",
  ],
  sections: [
    {
      title: "第一阶段：逻辑与编程基础",
      description:
        "先建立计算思维和问题拆解能力，再进入代码语法，这样学生后面学 Python、算法和 AI 会更稳。",
      courses: [
        {
          name: "视觉化逻辑启蒙",
          summary:
            "用图形化方式理解变量、循环、条件判断和事件驱动，让零基础学生先建立逻辑感和成就感。",
          bullets: [
            "变量、循环与条件判断",
            "事件驱动与流程控制",
            "问题拆解与调试习惯",
          ],
        },
      ],
    },
    {
      title: "第二阶段：Python 主线课程",
      description:
        "Python 是 AI 学习的核心入口，我们按由浅入深的方式，把基础语法、数据结构、应用开发和进一步方向拆成清楚模块。",
      courses: [
        {
          name: "Python 1：核心基础",
          summary: "学习变量、运算、条件判断、循环、列表、函数和基础应用。",
        },
        {
          name: "Python 2：数据结构与面向对象",
          summary: "进入 tuple、set、dictionary、高级函数用法，并初步理解面向对象编程。",
        },
        {
          name: "Python 3：高级技巧",
          summary: "学习多维列表、嵌套循环、递归函数、高级面向对象和常用基础库。",
        },
        {
          name: "Python 4：库与可视化",
          summary: "使用标准库和第三方库，完成绘图、动画、图表、图形界面等应用。",
        },
        {
          name: "Python 5：应用设计",
          summary: "通过游戏设计和数据分析项目，把代码能力转成完整作品。",
        },
        {
          name: "Python 6：专题方向",
          summary: "进入网站后端、数据分析、传统机器学习等更深入方向。",
          note: "更适合数学与编程基础较强的高中阶段学生。",
        },
      ],
    },
    {
      title: "第三阶段：Java 与算法进阶",
      description:
        "对于希望继续提升算法、面向对象思维和更严谨编程能力的学生，我们会进入 Java 与经典问题训练。",
      courses: [
        {
          name: "Java 1：语法与基础",
          summary: "学习变量、输入输出、分支、循环、方法、数组、字符串与基础调试方式。",
        },
        {
          name: "Java 2：面向对象与常用类库",
          summary: "学习类、对象、继承、封装、多态、异常处理，以及常见集合与标准库的使用。",
        },
        {
          name: "Java 3：经典算法问题",
          summary: "围绕搜索、排序、路径规划和数据结构题目理解算法思想与实现方式。",
        },
      ],
    },
    {
      title: "第四阶段：Web 与应用开发",
      description:
        "让学生看到编程不仅能解题，也能做网站、交互应用、网页游戏与基础系统项目。",
      courses: [
        {
          name: "前端 Web 开发",
          summary: "学习 HTML、CSS、JavaScript、响应式设计和基础 UI/UX，实现可上线网页。",
        },
        {
          name: "Web 游戏设计",
          summary: "用 JavaScript 和 Canvas 做出 Snake、Pong、Tetris 等浏览器游戏。",
        },
        {
          name: "Linux 基础",
          summary: "学习命令行、文件系统、进程、网络、脚本和基础安全概念。",
        },
        {
          name: "数据库系统入门",
          summary: "理解数据库、SQL、ER 建模、规范化和索引等基础知识。",
        },
      ],
    },
    {
      title: "第五阶段：AI 专题方向",
      description:
        "适合已经具备一定基础、希望系统进入 AI 研究与应用方向的学生。",
      courses: [
        {
          name: "机器学习",
          summary: "理解监督学习、无监督学习、回归、分类、聚类和现实中的 AI 应用。",
        },
        {
          name: "自然语言处理",
          summary: "学习文本预处理、表示方法、序列模型、Transformer，以及问答、翻译和聊天应用。",
        },
        {
          name: "计算机视觉",
          summary: "学习图像表示、特征提取、CNN、目标检测和视觉系统的实际应用。",
        },
      ],
    },
  ] satisfies CurriculumSection[],
} as const;
