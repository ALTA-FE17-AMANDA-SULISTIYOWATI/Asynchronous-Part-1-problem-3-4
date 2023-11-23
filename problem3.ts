const jajanBoba = (uang: number, callback: (sisaUang: number) => void) => {
  const bobaPrice = 5000

  setTimeout(() => {
    if (uang >= bobaPrice) {
      console.log(`Kamu jajan boba dengan harga Rp.${bobaPrice}`)
      const sisaUang = uang - bobaPrice
      console.log(`Sisa uang kamu Rp.${sisaUang}`)
      callback(sisaUang)
    } else {
      console.log(`Maaf uang kamu belum cukup untuk membeli boba`)
      console.log(`sisa uang kamu sebesar Rp.${uang}`)
    }
  }, 5000)
}

const jajanSeblak = (uang: number) => {
  const seblakPrice = 8000

  setTimeout(() => {
    if (uang >= seblakPrice) {
      console.log(`Kamu jajan seblak dengan harga Rp.${seblakPrice}`)
      const sisaUang = uang - seblakPrice
      console.log(`Sisa uang kamu Rp.${sisaUang}`)
    } else {
      console.log(`Maaf uang kamu belum cukup untuk untuk membeli seblak`)
      console.log(`Sisa uang kamu sebesar Rp.${uang}`)
    }
  }, 9000)
}

jajanBoba(20000, jajanSeblak)
jajanBoba(10000, jajanSeblak)
