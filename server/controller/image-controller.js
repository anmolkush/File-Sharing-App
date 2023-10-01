import File from "../models/file.js"
export const uploadImage =async (request,response)=>{
    console.log(request.file.path)
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname, // Correct the typo from 'originalnamee' to 'originalname'
    }
    

    try {
        const file= await File.create(fileObj)
        file.save();
        response.status(200).json({
            path:`http://localhost:8000/file/${file._id}`
        })
        
        
    } catch (error) {
        console.error(error.message);
        response.status(500).json({error:error.message})
        
    }


}

export const downloadImage=async(request,response)=>
{
    console.log('insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
try {
    const file=await File.findById(request.params.fileId);
    file.downloadContent++;
    await file.save();
    console.log(file.name,file.path)
    response.download(file.path,file.name)
    
} catch (error) {
    console.error(error.message);
    return response.status(500).json({
        error:error.message
    })
    
}
}