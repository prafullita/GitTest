import axios from "axios";

const baseURL = "http://localhost:8082/";

class GalleryService {
  getAlbums() {
    return axios.get(baseURL + "admin/getAlbums");
  }

  createAlbums(albumName) {
    return axios.post(baseURL + "admin/createAlbum", albumName);
  }

  getCps() {
    return axios.get(baseURL + "admin/getCp");
  }

  getAlbumImagesByAlbumId(id) {
    return axios.get(baseURL + "admin/getAlbums/" + id);
  }

  getAlbumByAlbumId(id) {
    return axios.get(baseURL+"admin/getAlbumsById/"+id)
  }

  deleteImageInAlbum(id) {
    return axios.delete(baseURL + "admin/delImg/" + id);
  }

  deleteAlbum(albumId) {
    return axios.delete(baseURL + "admin/delAlbum/" + albumId);
  }
}

export default new GalleryService();
