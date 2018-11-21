// // Publich arraw function area
// // Export single module
// exports.area = (width,height)=>(
//     width*height
// )

// exports.cir=(width,height)=>(
//     (width+height)*2
// )

// Export any funtion in one module 
module.exports= {
    area: (width, height)=> {return width*height},
    cir:(width,height)=>{
        console.log('Calculating')
        return (width + height) * 2
    },
    curentDateTime:Date(),
    directoryName:__dirname,
    fileName:__filename
}