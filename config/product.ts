import { ProductConfig } from "types";

const enConfig: ProductConfig = {
    title: 'Prompt',
    subtitle: 'Collect high-quality Midjourney prompt, Make you create image faster and better',
    submitButton: 'Submit Product',
    details: 'Details',
    introduction: 'Prompt',
    github: 'Github',
    source: 'Source',
    price: 'Price',
    website: 'Website',
    submitter: 'Submitter',
    free: 'Free',
    opensource: 'OpenSource',
    date: 'Date',
}

const zhConfig: ProductConfig = {
    title: '提示词',
    subtitle: '收录高质量Midjourney提示词，助力更快更好地生成图片',
    submitButton: '推荐工具',
    details: '详情',
    introduction: '提示词',
    github: '代码',
    source: '来源',
    price: '价格',
    website: '官网',
    submitter: '推荐者',
    free: '免费',
    opensource: '开源',
    date: '日期',
}

export const AllProductConfigs:{[key: string]: ProductConfig} = {
    en: enConfig,
    zh: zhConfig,
}