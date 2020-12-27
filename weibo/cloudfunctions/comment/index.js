// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lizun-9gtuuwmq812c470e'

cloud.init()
const db = cloud.database({ env })
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  // const publishDataIndex = event.publishDataIndex
  const commentUser = event.commentUser
  const pariseId = event.pariseId
  const content = event.content
  return await db.collection('publishData').doc(pariseId).update({
    data: {
      comment: _.push({
        commentUser,
        content
      })
    }
  })
}