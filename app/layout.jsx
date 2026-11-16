import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './style.css'

export const metadata = {
  metadataBase: new URL('https://lilin-eco.github.io/dazhou-lilin-eco-tech-guide/'),
  title: { default: '使用指南 · 装饰工程项目管理系统', template: '%s · 装饰工程指南' },
  description: '按工程组织工作，沿业务记录核对进度、费用与交付。',
  robots: { index: false, follow: false }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 163, saturation: 70 }} />
      <body>
        <Layout
          navbar={<Navbar logo={<span className="brand"><span className="brand-icon">林</span><span>礼林工程 <small>使用指南</small></span></span>} />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/lilin-eco/dazhou-lilin-eco-tech-guide/tree/main"
          editLink="编辑本页"
          feedback={{ content: '反馈使用问题', labels: 'documentation' }}
          search={<Search placeholder="搜索操作、单据或问题…" emptyResult="没有找到相关内容" loading="正在搜索…" errorText="搜索索引加载失败，请刷新后重试" />}
          themeSwitch={{ light: '浅色', dark: '深色', system: '跟随系统' }}
          copyPageButton={false}
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          toc={{ title: '本页内容', backToTop: '返回顶部' }}
          footer={<Footer>© 2026 达州礼林生态科技有限责任公司 · 使用指南 v0.1</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
