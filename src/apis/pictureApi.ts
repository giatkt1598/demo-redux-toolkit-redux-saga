import axios from "axios";
import { Picture } from "../models/picture";

export async function getPictureAPI() : Promise<Picture | undefined> {
    const response = await axios.get("");
    return response.data as Picture;
}