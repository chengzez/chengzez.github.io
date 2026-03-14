import type { NavItem } from "./home";

export type FacultyHighlight = {
  label: string;
  text: string;
};

export type FacultyTeacher = {
  name: string;
  role: string;
  description: string;
  highlights: FacultyHighlight[];
};

export const facultyNav = [
  { label: "首页", href: "index.html" },
  { label: "课程体系", href: "curriculum.html" },
  { label: "教师阵容", href: "faculty.html" },
  { label: "咨询报名", href: "index.html#contact" },
] satisfies NavItem[];

export const facultyContent = {
  hero: {
    eyebrow: "教师阵容",
    title: "两位老师带领学生把 AI、编程与项目真正学明白",
    description:
      "我们希望家长看到的不只是老师会讲什么内容，更是老师能不能把复杂主题讲清楚、把项目带出来，并帮助学生建立长期可延续的学习能力。",
  },
  teachers: [
    {
      name: "Chengze Zheng",
      role: "AI 与数据方向教师",
      description:
        "具有工程、AI 与数据分析交叉背景，长期关注如何把编程教育、机器学习理解和真实项目实践连接起来，帮助学生从理解概念走到完成项目，再进一步学会如何展示自己的思路与作品。",
      highlights: [
        {
          label: "背景：",
          text: "工程与人工智能相关学术训练，熟悉数据分析、机器学习与项目落地的学习路径。",
        },
        {
          label: "从事领域：",
          text: "AI 入门教学、数据分析、机器学习实践、项目式课程设计。",
        },
        {
          label: "课程特点：",
          text: "强调从基础逻辑到真实项目的连续推进，而不是零散体验。",
        },
        {
          label: "教学方式：",
          text: "注重把抽象的技术概念翻译成中学生能够理解和实践的任务。",
        },
        {
          label: "课堂目标：",
          text: "帮助学生建立代码能力、AI 思维和项目表达能力。",
        },
      ],
    },
    {
      name: "Yuqi Chen",
      role: "编程与项目实践教师",
      description:
        "具有编程实践与项目协作背景，重视把课堂知识变成学生真正能完成、能展示、能讲明白的作品，让学生在写代码、调试和表达成果的过程中逐步形成更扎实的技术理解。",
      highlights: [
        {
          label: "背景：",
          text: "关注软件实现、项目协作与学生动手能力培养，强调课堂中的实际完成度。",
        },
        {
          label: "从事领域：",
          text: "编程基础教学、应用开发实践、项目辅导与成果展示支持。",
        },
        {
          label: "课程特点：",
          text: "关注学生能否真正把知识落到作品里，而不是只停留在课堂听懂。",
        },
        {
          label: "教学方式：",
          text: "重视练习反馈、项目拆解和一步一步完成可展示的成果。",
        },
        {
          label: "课堂目标：",
          text: "帮助学生提升独立动手能力、问题分析能力与项目完成度。",
        },
      ],
    },
  ] satisfies FacultyTeacher[],
} as const;
