const questions = [
  {
    id: 1,
    title: 'Bắt đầu dòng tiêu đề bằng một con số',
    info:
      'Điều tuyệt vời khi bạn bắt đầu dòng tiêu đề bằng một con số, không chỉ bởi vì nó tạo ra sự tò mò cho độc giả, mà nó còn giúp bạn sắp xếp bài viết cực kỳ dễ dàng, bởi vì bạn đã có trong tay một danh sách các thứ cần phải viết. Với danh sách bằng những con số, độc giả của bạn cũng dễ dàng theo dõi nội dung bài viết hơn. Họ dễ dàng đọc lướt qua các dòng tiêu đề trong bài viết của bạn để có một cái nhìn tổng quát về nội dung mà bạn muốn truyền đạt. ví dụ: bạn có thể bắt đầu theo kiểu: 7 cách giúp bạn trở nên hạnh phúc hơn mỗi ngày.',
    source: 'https://www.buzzfeed.com/'
  },
  {
    id: 2,
    title: 'Sử dụng "How to" (Làm thế nào)',
    info:
      'Rất nhiều người trong chúng ta biết phải làm thế nào để giải quyết vấn đề, nhưng khi vấn đề thực sự xảy ra, giải pháp của bạn đôi khi lại không khả thi. Đơn giản có thể giải pháp của bạn chưa từng được kiểm chứng trong thực tế, bạn mới chỉ nghĩ ra giải pháp nhưng chưa bao giờ thực thi. Do đó, nếu bạn muốn lấy được sự chú ý của khách hàng tiềm năng của bạn, sử dụng công thức trên có thể là một trong những cách hay. ví dụ: Làm thế nào để có một gia đình hạnh phúc. Bạn có thể thêm các cụm từ nhấn mạnh như "thậm chí", "không" vào giữa dòng tiêu đề. ví dụ: Làm thế nào để tạo ra một website thậm chí không biết một dòng code',
  },
  {
    id: 3,
    title: 'Chỉ ra những lỗi phổ biến',
    info:
      'Một lần nữa, dòng tiêu đề như trên khơi gợi sự tò mò cho độc giả. bạn có công nhận điều đó không?Họ sẽ nghĩ không biết họ có đang phạm phải những sai lầm trong vấn đề của riêng họ, từ đó mong chờ một giải pháp khả thi thông qua bài viết của bạn. Ví dụ: Bạn có đang vướng phải 10 sai lầm kinh điển này trong hoạt động quảng cáo Google',
  },
  {
    id: 4,
    title: 'Đặt một câu hỏi',
    info:
      'Tôi nghĩ đây là một cách hay giúp bạn tương tác với độc giả. Với việc đặt câu hỏi đúng, sẽ giúp bạn thực sự hiểu thấu vấn đề khách hàng đang gặp phải, từ đó đưa ra được giải pháp phù hợp. Luôn nhớ rằng, bạn đang bán giải pháp giúp khách hàng giải quyết vấn đề của họ. Chỉ khi nào bạn đặt lợi ích của họ lên trên hết, khi đó bạn mới bán hàng một cách hiệu quả. Ví dụ: Bạn có thực sự hiểu về SEO. Hãy làm bài trắc nghiệm này để hiểu rõ hơn.',
  },
  {
    id: 5,
    title: 'Sử dụng dấu chấm câu',
    info:
      'Đây rõ ràng là một kỹ thuật đơn giản nhưng hiệu quả, đặc biệt trong lĩnh vực SEO. Cách sử dụng như sau: Bạn đặt từ khóa của bạn ở đầu câu, sau đó sử dụng dấu hai chấm hoặc dấu gạch ngang. ví dụ: Marketing online: làm thế nào bạn tìm ra thị trường ngách?',
  },
  {
    id: 6,
    title: 'Mô tả cực kỳ cụ thể',
    info:
      'Nhớ rằng dòng tiêu đề đặt nền móng cho toàn bộ bài viết của bạn. Cố gắng nói rõ ràng nội dung của bài viết thông qua dòng tiêu đề. Một dòng tiêu đề kém chất lượng chỉ nói khái quát chung chung sẽ ít gây ra sự tò mò và mong muốn đọc tiếp của độc giả. ví dụ bạn viết: (cách soạn một bản nhạc) với (Bản nhạc đầu tiên: Tạo ra bản nhạc của riêng bạn với 101 bước sau đây.) . Rõ rành ở dòng tiêu đề thứ hai, vấn đề được làm sáng tỏ và cụ thể hơn nhiều so với dòng đầu tiên. Bạn có công nhận điều đó không?',
  },
  {
    id: 7,
    title: 'Sử dụng 5Ws(What, when, where, who, why)',
    info:
      'Sử dụng 5Ws thực sự giúp bạn đưa cho độc giả loại thông tin mà bạn có ý định cung cấp tới họ. Đây cũng là nhưng câu hỏi rất hay được sử dụng để đặt câu hỏi. ví dụ: trả lời 7 câu hỏi này giúp bạn làm rõ tại sao bạn vẫn độc thân.😃. Hay: làm thế nào để sống khỏe mà vẫn ít tập thể dục: Bí quyết của người Nhật Bản',
  },
  {
    id: 8,
    title: 'Chú ý tới độ dài của dòng tiêu đề',
    info:
      'Nếu bạn muốn dòng tiêu đề của bạn trông đẹp và tránh trường hợp bị cắt một phần khi đưa lên Google, hãy chắc chắn rằng độ dài của dòng tiêu đề là phù hợp. Trong cuốn sách The Copywriting Sourcebook: How to write better copy, faster - for everything from ads to websites. Andy Maslen cho rằng dòng tiêu đề dài ít hơn 16 từ, 10 từ là đẹp nhất. Tuy nhiên thật khó để viết được dòng tiêu đề gọn gàng mà vẫn truyền tải thông điệp của bạn. Theo tôi nghĩ độ dài headline cũng chỉ là một tiêu chuẩn tương đối. Chỉ cần bạn chắc chắn nó không bị cắt khi bạn post trên các nền tảng truyền thông. Ví dụ tiêu chuẩn của Google thường hiển thị 50 - 60 từ đầu tiên của dòng tiêu đề. ',
  },
  {
    id: 9,
    title: 'Sử dụng hình ảnh để cải thiện chất lượng bài viết',
    info:
      'Một bức ảnh tốt rõ ràng có giá trị góp phần tạo lên sự thành công của bài viết. Hình ảnh thu hút độc giả và giúp họ hiểu hơn về bản chất của vấn đề và nội dung bạn muốn truyền đạt. Họ sẽ cái nhìn trực quan hơn, tưởng tượng tốt hơn và nhớ lâu hơn. Có rất nhiều nguồn bạn có thể lấy những bức ảnh đẹp miễn phí như unsplash.com hay pixels.com. Tuy nhiên hãy lưu ý về chất lượng và dung lượng của hình ảnh. một hình ảnh dung lượng lớn, sẽ làm giảm tốc độ tải trang, ảnh hưởng lớn tới thứ hạng website của bạn',
  },
  {
    id: 10,
    title: 'Thực hành',
    info:
      'Bây giờ hãy truy cập https://nealrs.github.io/25Headlines để thực hành viết 25 dòng tiêu đề về thị trường của bạn. Để ý rằng, độ dài tốt nhất cho một headline chất lượng là dưới 50 ký tự, cho twitter là 100 và cho email là 35 ký tự. Practice makes pefect. ',
  },
  
]
export default questions
