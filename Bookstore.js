const books = [
    [0,1,2,3,4],//Book ID
    ["Start with me","But how do it know","Clean code","Zero to one","You don't know JS"],//book name
    ["Simon Sinek","J.Clarck Scott","Robert Cecil Martin","Peter Thiel","Kyle Simpson"],//author name
    [80,59.99,50,45,39.99],//price
    [13,22,5,12,9]];//quantity

    /*
    let id = 2; //استعلام برقم الكتاب
    for(let i=0; i<5; i++){
        if (books[0][i] === id){
            console.log("تم العثور على الكتاب");
            console.log("معرف الكتاب:" + books[0][i]);
            console.log("عنوان الكتاب:" + books[1][i]);
            console.log("اسم المؤلف:" + books[2][i]);
            console.log("السعر:" + books[3][i]);
            console.log("الكمية:" + books[4][i]);
        }
    }

    let title = "Start with me"; //استعلام بعنوان الكتاب
    for(let i=0; i<5; i++){
        if (books[1][i] === title){
            console.log("تم العثور على الكتاب");
            console.log("معرف الكتاب:" + books[0][i]);
            console.log("عنوان الكتاب:" + books[1][i]);
            console.log("اسم المؤلف:" + books[2][i]);
            console.log("السعر:" + books[3][i]);
            console.log("الكمية:" + books[4][i]);
        }
    }

    let Author = "Peter Thiel"; //استعلام باسم الكاتب 
    for(let i=0; i<5; i++){
        if (books[2][i] === Author){
            console.log("تم العثور على الكتاب");
            console.log("معرف الكتاب:" + books[0][i]);
            console.log("عنوان الكتاب:" + books[1][i]);
            console.log("اسم المؤلف:" + books[2][i]);
            console.log("السعر:" + books[3][i]);
            console.log("الكمية:" + books[4][i]);
        }
    }
        */

    let ReqTitle = "Clean code";
let ReqQuantity = 2;
let CusBalance = 170;

function SellBook(ReqTitle, ReqQuantity, CusBalance) {
  let bookindex = -1;

  // 1. البحث عن الكتاب
  for (let i = 0; i < 5; i++) {
    if (books[1][i] === ReqTitle) {
      bookindex = i;
      break;
    }
  }

  // 2. الشروط والتحقق (داخل الدالة)
  if (bookindex === -1) {
    console.log("الكتاب " + ReqTitle + " غير موجود");
  } else if (books[4][bookindex] < ReqQuantity) {
    console.log("كمية الكتاب " + ReqTitle + " غير متوفرة");
  } else {
    // حساب التكلفة هنا ليتم استخدامها في الشرط والفاتورة
    let PricePerBook = books[3][bookindex];
    let TotalPrice = PricePerBook * ReqQuantity;

    if (CusBalance < TotalPrice) {
      console.log("رصيدك غير كافي / السعر الاجمالي " + TotalPrice);
    } else {
      // خصم الكمية وطباعة الفاتورة
      books[4][bookindex] = books[4][bookindex] - ReqQuantity;
      let remainBalance = CusBalance - TotalPrice;

      console.log("------------------");
      console.log("فاتورة شراء كتاب");
      console.log("------------------");
      console.log("اسم الكتاب :" + books[1][bookindex]);
      console.log("الكمية المطلوبة :" + ReqQuantity);
      console.log("سعر النسخة الواحدة :" + PricePerBook);
      console.log("الاجمالي المطلوب :" + TotalPrice);
      console.log("------------------------");
      console.log("الرصيد المتبقي للعميل :" + remainBalance);
      console.log("الكمية المتبقية بالمخزن :" + books[4][bookindex]);
      console.log("-------------------------");
    }
  }
}

// 3. استدعاء الدالة لتشغيل العمليات
SellBook(ReqTitle, ReqQuantity, CusBalance);