const model = require('../model')


const speechPage = async (ctx, next) => {
  
  await ctx.render('speechs.html', {
    title: '五四演讲'
  })
}


const speechIn = async (ctx, next) => {
  
  const number = ctx.request.body.number || ''
  const name = ctx.request.body.name || ''
  const sex = ctx.request.body.sex || ''
  const academic = ctx.request.body.academic || ''
  const aclass = ctx.request.body.aclass || ''
  const qq = ctx.request.body.QQ || ''
  const tel = ctx.request.body.tel || ''
  const email = ctx.request.body.email || ''
  const declaration = ctx.request.body.declaration || ''
  const introduction = ctx.request.body.introduction || ''
  const understand = ctx.request.body.understand || ''
  
  
  if (number === '' || 
      name === '' || 
      sex === '' ||
      academic === '' || 
      aclass === '' ||  
      qq === '' ||  
      tel === '' ||
	    email === '' || 
	    declaration === '' || 
      introduction === '' || 
      understand === '' )
   {
    await info(ctx, '输入失败', '请完善信息！')
      } 
  else {
    try {
      await model.User.create(number, name, sex, academic, aclass, qq,tel, email, declaration, introduction, understand)
      await info(ctx, '保存成功', '报名成功！')
    } catch {
      await info(ctx, '保存失败', '请重新输入')
    }
  }
		
}			
  
async function info(ctx, title, info) {
  await ctx.render('info.html', {
    title: title,
    info: info
  })
}

module.exports = {
  'GET /speechs': speechPage,
  'POST /speechIn': speechIn
}

