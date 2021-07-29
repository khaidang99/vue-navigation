import Model from "./Model";

export default class Article extends Model {
  static async getArticles({ params }) {
    return new this().makeRequest({
      method: "GET",
      url: `blogs`,
      params: params,
      isStatic: true,
    });
  }
  static async getArticleDetail(id) {
    return new this().makeRequest({
      method: "GET",
      url: `blogs/${id}`,
      isStatic: true,
    });
  }
}
