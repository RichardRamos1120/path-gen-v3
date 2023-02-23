import { ref,uploadBytes,getDownloadURL } from "firebase/storage";
import {storage} from "../firebase/config";


export const useUpload = () =>{


    // Create a storage reference from our storage service
    const uploadImg = async (blob,id,qs,user,document,picName) =>{
        const imgFile = ref(storage,picName)
        const uploadedImg = ref(storage,`images/${user.uid}/${id}/${qs}/${picName}`)

        const snapshot = await uploadBytes(uploadedImg,blob)

        const imgurl = await getDownloadURL(uploadedImg)
        return imgurl


    }

    return {uploadImg}

}