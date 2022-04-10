import axios from "axios";

const baseURL = "http://localhost:8080/";

class GalleryService {
  getAlbums() {
    return axios.get(baseURL + "getAlbums");
  }

  createAlbums(albumName) {
    return axios.post(baseURL + "createAlbum", albumName);
  }

  getCps() {
    return axios.get(baseURL + "getCp");
  }

  getAlbumImagesByAlbumId(id) {
    return axios.get(baseURL + "getAlbums/" + id);
  }

  getAlbumByAlbumId(id) {
    return axios.get(baseURL+"getAlbumsById/"+id)
  }

  deleteImageInAlbum(id) {
    return axios.delete(baseURL + "delImg/" + id);
  }

  deleteAlbum(albumId) {
    return axios.delete(baseURL + "delAlbum/" + albumId);
  }
}

export default new GalleryService();
