function createRelatedArticles(articles, selectedArticleTags, handle) {
  const allFilteredArticles = articles.filter(a => a.handle !== handle)
  const relatedArticles = []
  selectedArticleTags.map(saTag => {
    allFilteredArticles.map(singleArticle => {
      let point = 0
      singleArticle.tags.map(sinArcTag => {
        console.log(`${sinArcTag} === ${saTag} : ${sinArcTag === saTag}`)
        if (sinArcTag === saTag) {
          point = point + 1
        }
      })
      const relatedArticleWithPoint = { ...singleArticle, point: point }
      if (point === 0) return
      relatedArticles.push(relatedArticleWithPoint)
    })
  })
  return relatedArticles
}

module.exports = createRelatedArticles
