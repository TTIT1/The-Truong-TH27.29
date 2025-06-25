const questions = [
  
    {
        question: "Chỉ ra phát biểu đúng nhất về thiết kế phần mềm?",
        options: [
            "Thiết kế phần mềm là quá trình xây dựng một hệ thống thực hiện được dựa vào thiết kế.",
            "Thiết kế phần mềm là quá trình xây dựng không gian giải pháp cho vấn đề.",
            "Thiết kế phần mềm là quá trình xây dựng các thành phần chức năng của phần mềm và quan hệ giữa chúng.",
            "Thiết kế phần mềm là quá trình chuyển hóa các yêu cầu phần mềm thành một biểu diễn thiết kế."
        ],
        correctAnswer: 3 // Index 3 corresponds to the last option (marked with *)
    },
    {
        question: "Trong chất lượng thiết kế phần mềm, kết dính thời điểm là gì?",
        options: [
            "Tất cả các thành phần cùng hoạt hóa một lúc được bó lại với nhau.",
            "Trong một mô đun, ra của phần tử này là đầu vào của phần tử khác.",
            "Các phần tử trong mô đun được ghép lại trong một dãy điều khiển.",
            "Các công việc không liên quan với nhau, song lại bị bó vào một mô đun."
        ],
        correctAnswer: 0 // Index 0 corresponds to the first option (marked with *)
    },
    {
        question: "\"Thiết kế chi tiết và đặc tả các cấu trúc dữ liệu được dùng trong việc thực hiện hệ thống.\" Đây là hoạt động gì trong thiết kế phần mềm?",
        options: [
            "Đặc tả cấu trúc dữ liệu.",
            "Thiết kế thuật toán.",
            "Đặc tả thuật toán.",
            "Thiết kế cấu trúc dữ liệu."
        ],
        correctAnswer: 3 // Index 3 corresponds to the last option (marked with *)
    },
    {
        question: "Ưu điểm của mô hình kiến trúc khách – phục vụ?",
        options: [
            "Hiệu quả khi chia sẻ một số lượng lớn dữ liệu.",
            "Hỗ trợ sự phát triển tăng trưởng của các hệ con.",
            "Dễ dàng thêm mới hoặc nâng cấp server hiện tại.",
            "Khi một hệ con thay đổi ảnh hưởng đến hệ con khác."
        ],
        correctAnswer: 2 // Index 2 corresponds to the third option (marked with *)
    },
    {
        question: "Trong thiết kế phần mềm,thiết kế thành phần là gì?",
        options: [
            "Các giao diện của hệ con với các hệ con khác được thiết kế và ghi thành tài liệu.",
            "Xác định hệ tổng thể phần mềm bao gồm các hệ con và các quan hệ giữa chúng và ghi thành tài liệu.",
            "Các dịch vụ mà một hệ con cung cấp được phân chia cho các thành phần hợp thành của hệ được thiết kế.",
            "Các đặc tả cho mỗi hệ con về các dịch vụ mà nó cung cấp cũng như các ràng buộc chúng phải tuân thủ."
        ],
        correctAnswer: 2 // Index 2 corresponds to the third option (marked with *)
    },
    {
        question: "Kể tên các chiến lược thiết kế phần mềm?",
        options: [
            "Thiết kế hướng chức năng và thiết kế phi chức năng.",
            "Thiết kế kiến trúc và thiết kế giao diện.",
            "Thiết kế hướng đối tượng và thiết kế giao diện.",
            "Thiết kế hướng chức năng và thiết kế hướng đối tượng"
        ],
        correctAnswer: 3 // Index 3 corresponds to the last option (marked with *)
    },
    {
        question: "Sơ đồ sau mô tả tiến trình gì?",
        image: "images/hinh1.png", // Update with the actual image path
        options: [
            "Đặc tả trừu tượng hoạt động thiết kế.",
            "Hoạt động thiết kế và sản phẩm.",
            "Các hoạt động thiết kế phần mềm.",
            "Hoạt động thiết kế chi tiết và đặc tả."
        ],
        correctAnswer: 1 // Index 1 corresponds to the answer marked with *
    },
    {
        question: "Trong chất lượng thiết kế phần mềm, độ đo 'sự ghép nối' là gì?",
        options: [
            "Độ ghép nối lại với nhau giữa các phần trong mô đun đó.",
            "Các phần tử trong mô đun được ghép lại trong một dãy điều khiển.",
            "Độ ghép nối với nhau giữa các đơn vị hay mô đun của hệ thống.",
            "Các thành phần cùng thực hiện chức năng tương tự đặt vào một mô đun."
        ],
        correctAnswer: 2
    },
    {
        question: "Đặc điểm của giao diện dòng lệnh?",
        options: [
            "Giao diện đơn giản, thao tác thực hiện tuần tự.",
            "Giao diện đơn giản, có thể tương tác song song.",
            "Sử dụng cửa sổ, menu, icon,…,bàn phím, chuột.",
            "Có nhiều cửa sổ, có thể tương tác song song."
        ],
        correctAnswer: 0
    },
    {
        question: "Đặc điểm của giao diện đồ họa?",
        options: [
            "Giao diện đơn giản, thao tác thực hiện tuần tự.",
            "Giao diện đơn giản, có thể tương tác song song.",
            "Có nhiều cửa sổ, nhập lệnh/dữ liệu từ bàn phím.",
            "Có nhiều cửa sổ, có thể tương tác song song."
        ],
        correctAnswer: 3
    },
    {
        question: "Trong thiết kế kiến trúc, thế nào là mô hình lớp?",
        options: [
            "Mọi dữ liệu được lưu trữ tại một cơ sở dữ liệu trung tâm được truy cập bởi các lớp.",
            "Tổ chức hệ thống thành một tập hợp các lớp cung cấp tập hợp các dịch vụ.",
            "Mô hình hệ thống phân tán, biểu diễn phân tán dữ liệu và xử lý trên nhiều máy tính.",
            "Mô hình mà để vận hành, hệ thống phải được điều khiển làm việc đồng bộ và đúng."
        ],
        correctAnswer: 1
    },
    {
        question: "Đặc trưng của phần mềm?",
        options: [
            "Hao mòn, được chế tạo theo nghĩa cổ điển.",
            "Được lắp ráp từ mẫu có sẵn.",
            "Không hỏng đi, thoái hóa theo thời gian.",
            "Đơn giản, dễ  hiểu, hữu hình."
        ],
        correctAnswer: 2
    },
    {
        question: "Yếu tố nào trong kỹ nghệ phần mềm 'cung cấp sự hỗ trợ tự động hay bán tự động cho các phương pháp'?",
        options: [
            "Công cụ",
            "Phương pháp",
            "Thủ tục",
            "Kỹ thuật"
        ],
        correctAnswer: 0
    },
    {
        question: "Tiêu chuẩn 'tính tin cậy' trong đánh giá phần mềm là gì?",
        options: [
            "Phần mềm không gây nên các thiệt hại vật lý và kinh tế khi hệ thống thất bại.",
            "Phần mềm không được lãng phí các tài nguyên của hệ thống.",
            "Phần mềm có thể dễ dàng sửa chữa và nâng cấp được.",
            "Phần mềm có giao diện người dùng thích hợp, có tư liệu hướng dẫn và các tiện ích trợ giúp đầy đủ."
        ],
        correctAnswer: 0
    },
    {
        question: "Để kiểm tra phần mềm có những hoạt động nào?",
        options: [
            "Tìm lỗi và gỡ lỗi.",
            "Kiểm thử và tìm lỗi.",
            "Xác minh và thẩm định.",
            "Xác minh và sửa lỗi."
        ],
        correctAnswer: 2
    },
    {
        question: "Khái niệm phần mềm?",
        options: [
            "Được mô tả với ba bộ phận cấu thành là các chương trình máy tính, các cấu trúc dữ liệu và các tài liệu liên quan.",
            "Hệ thống chương trình được phát triển cho một tập thể hoặc cá nhân, sản xuất phần mềm theo đơn đặt hàng.",
            "Chương trình phần mềm được phát triển cho một phạm vi các khách hàng khác nhau, sản xuất phần mềm đại trà.",
            "Chương trình phần mềm được viết bằng một hoặc nhiều ngôn ngữ lập trình nhằm giải quyết một bài toán cụ thể."
        ],
        correctAnswer: 0
    },
    {
        question: "Chỉ ra những giai đoạn trong tiến trình phần mềm?",
        options: [
            "Thiết kế, lập trình, vận hành.",
            "Xác định, phát triển, bảo trì.",
            "Đặc tả yêu cầu, thiết kế, lập trình.",
            "Phân tích, thiết kế, lập trình, bảo trì."
        ],
        correctAnswer: 1
    },
    {
        question: "'Tập hợp yêu cầu, thiết kế nhanh, xây dựng bản mẫu, đánh giá của khách hàng, làm mịn yêu cầu, sản phẩm cuối cùng.' Đây là các pha của mô hình kỹ nghệ phần mềm nào?",
        options: [
            "Mô hình làm bản mẫu.",
            "Mô hình thác nước.",
            "Mô hình xoắn ốc.",
            "Mô hình kỹ thuật thế hệ thứ tư."
        ],
        correctAnswer: 0
    },
    {
        question: "Đặc điếm của mô hình xoắn ốc?",
        options: [
            "Nhanh chóng xác định được yêu cầu.",
            "Tách biệt giữa các pha, tiến hành tuần tự.",
            "Có thể kiểm soát rủi ro ở từng mức tiến hóa.",
            "Sử dụng bộ case trong quá trình phát triển."
        ],
        correctAnswer: 2
    },
    {
        question: "Phân loại theo phạm vi sử dụng, sản phẩm phần mềm có những loại nào?",
        options: [
            "Phần mềm hệ thống, phần mềm ứng dụng.",
            "Phần mềm nhúng, phần mềm tiện ích.",
            "Phần mềm công cụ, phần mềm tiện ích.",
            "Phần mềm đặt, phần mềm dùng chung."
        ],
        correctAnswer: 3
    },
    {
        question: "Khái niệm kỹ nghệ phần mềm?",
        options: [
            "Việc thiết lập và sử dụng các nguyên lý công nghệ đúng đắn để thu được phần mềm một cách kinh tế vừa tin cậy vừa làm việc hiệu quả trên các máy thực.",
            "Được mô tả với ba bộ phận cấu thành: các chương trình máy tính, các cấu trúc dữ liệu và các tài liệu liên quan.",
            "Chương trình phần mềm được viết bằng một hoặc nhiều ngôn ngữ lập trình theo một trật tự xác định.",
            "Bao gồm ba yếu tố chính: phương pháp, công cụ, thủ tục giúp con người quản lý, kiểm soát quá trình phát triển, xây dựng phần mềm chất lượng và hiệu quả."
        ],
        correctAnswer: 0
    },
    {
        question: "Mục tiêu của hoạt động quản lý rủi ro?",
        options: [
            "Đảm bảo kiểm soát mọi thay đổi, đồng bộ sản phẩm.",
            "Đảm bảo thu thập, lưu trữ đủ thông tin và cung cấp kịp thời.",
            "Đảm bảo hạn chế và ngăn ngừa thiệt hại do sự cố xảy ra.",
            "Đảm bảo phục vụ, trợ giúp tốt nhất mọi hoạt động dự án."
        ],
        correctAnswer: 2
    },
    {
        question: "'Tên người quản lý, tên nhà tài trợ, tuyên bố dự án bắt đầu và đề nghị những người liên quan hợp tác toàn diện với dự án.' Đây là những thông tin cần có của loại tài liệu nào trong quản lý dự án?",
        options: [
            "Bản đề xuất dự án.",
            "Bản công bố dự án.",
            "Bản ký hợp đồng.",
            "Bản xây dựng dự án."
        ],
        correctAnswer: 1
    },
    {
        question: "Có thể phân loại phần mềm theo cách nào?",
        options: [
            "Phạm vi sử dụng, miền ứng dụng.",
            "Phần mềm đặt, phần mềm dùng chung.",
            "Phần mềm hệ thống, phần mềm ứng dụng.",
            "Phần mềm thời gian thực, phần mềm nhúng."
        ],
        correctAnswer: 0
    },
    {
        question: "Chiến lược kiểm thử nào mà việc kiểm thử bắt đầu với mô đun mức cao nhất và tiếp theo là các mô đun thấp hơn một mức?",
        options: [
            "Chiến lược kiểm thử dưới lên.",
            "Chiến lược kiểm thử trên xuống.",
            "Chiến lược kiểm thử gây áp lực.",
            "Chiến lược kiểm thử song song."
        ],
        correctAnswer: 1
    },
    {
        question: "Thế nào là hoạt động bảo trì hiệu chỉnh?",
        options: [
            "Thay đổi những chức năng đã có, các mở rộng được người dùng gửi đến.",
            "Hoạt động sửa đổi phần mềm để thích ứng những thay đổi của môi trường.",
            "Thay đổi để cải thiện tính năng bảo trỡ hay độ tin cậy cho những mở rộng sau.",
            "Quá trình phân tích và hiệu chỉnh một hay nhiều lỗi của chương trình."
        ],
        correctAnswer: 3
    },
    {
        question: "Trong chất lượng thiết kế phần mềm, kết dính gom góp là gì?",
        options: [
            "Tất cả các thành phần cùng hoạt hóa một lúc được bó lại với nhau.",
            "Các phần tử trong mô đun được ghép lại trong một dãy điều khiển.",
            "Các thành phần cùng thực hiện các chức năng tương tự được đặt vào cùng một mô đun.",
            "Các công việc không liên quan với nhau, song lại bị bó vào một mô đun."
        ],
        correctAnswer: 3
    },
    {
        question: "Vai trò của thiết kế phần mềm ?",
        options: [
            "Pha duy nhất quyết định chất lượng phần mềm.",
            "Công cụ giao tiếp giữa nhà phát triển và khách hàng.",
            "Cung cấp đầy đủ thông tin cho việc bảo trì sau này.",
            "Pha đầu tiên của quá trình phát triển phần mềm."
        ],
        correctAnswer: 2
    },
    {
        question: "Thứ tự các hoạt động trong tiến trình hình thành yêu cầu?",
        options: [
            "Xác định yêu cầu, nghiên cứu khả thi, đặc tả yêu cầu, phân tích yêu cầu.",
            "Xác định yêu cầu, phân tích yêu cầu, đặc tả yêu cầu, nghiên cứu khả thi.",
            "Nghiên cứu khả thi, phân tích yêu cầu, đặc tả yêu cầu, xác định yêu cầu.",
            "Nghiên cứu khả thi, xác định yêu cầu, phân tích yêu cầu, đặc tả yêu cầu."
        ],
        correctAnswer: 3
    },
    {
        question: "\"Các đặc tả cho mỗi hệ con về các dịch vụ mà nó cung cấp cũng như các ràng buộc chúng phải tuân thủ.\" Đây là hoạt động gì trong thiết kế phần mềm?",
        options: [
            "Đặc tả trừu tượng.",
            "Thiết kế thành phần.",
            "Thiết kế kiến trúc.",
            "Thiết kế hệ con."
        ],
        correctAnswer: 0
    },
    {
        question: "Yêu cầu thường được mô tả ở những mức nào?",
        options: [
            "Phân tích yêu cầu, xác định yêu cầu.",
            "Yêu cầu chức năng, yêu cầu phi chức năng.",
            "Xác định yêu cầu, đặc tả yêu cầu.",
            "Xác định yêu cầu, phân tích yêu cầu."
        ],
        correctAnswer: 2
    },
    {
        question: "Ưu điểm của mô hình kiến trúc khách-phục vụ?",
        options: [
            "Sử dụng hiệu quả mạng, phân tán dữ liệu dễ dàng.",
            "Hiệu quả khi chia sẻ một số lượng lớn dữ liệu.",
            "Hỗ trợ sự phát triển tăng trưởng của các hệ con.",
            "Khi một hệ con thay đổi ảnh hưởng đến hệ con khác."
        ],
        correctAnswer: 0
    },
    {
        question: "Thế nào là bảo trì không cấu trúc?",
        options: [
            "Phần mềm có cấu hình hoàn thiện, nhiệm vụ bảo trì bắt đầu bằng việc đánh giá các tài liệu thiết kế.",
            "Bảo trì cải thiện các tính năng bảo trì như độ tin cậy, cung cấp nền tảng tốt hơn cho những mở rộng sau này.",
            "Bảo trì đáp ứng các thay đổi những chức năng đã có và các mở rộng tổng quát được người dùng gửi đến.",
            "Phần mềm có cấu hình duy nhất là mã nguồn, hoạt động bảo trì bắt đầu với việc đánh giá chi tiết mã nguồn."
        ],
        correctAnswer: 3
    },
    {
        question: "Sơ đồ dưới đây chỉ ra tiến trình gì?",
        image: "images/hinh2.png",
        options: [
            "Phân tích các yêu cầu.",
            "Hình thành các yêu cầu.",
            "Thu thập các yêu cầu.",
            "Xác định các yêu cầu."
        ],
        correctAnswer: 1
    },
    {
        question: "Cho công thức bảo trì : M = p(K*exp(c-d)), ý nghĩa tham số p là gì?",
        options: [
            "Hằng số kinh nghiệm.",
            "Công việc làm.",
            "Đánh giá độ phức tạp cho việc thiếu thiết kế về cấu trúc và dữ liệu.",
            "Đánh giá mức độ hiểu biết về phần mềm."
        ],
        correctAnswer: 1
    },
    {
        question: "Trong thiết kế phần mềm, thiết kế sơ bộ là gì?",
        options: [
            "Tập trung vào việc làm mịn biểu diễn kiến trúc dẫn tới cấu trúc dữ liệu chi tiết và biểu diễn thuật toán.",
            "Chuyển các mô hình dữ liệu thành các cấu trúc dữ liệu cần thiết cho việc cài đặt phần mềm.",
            "Quá trình dịch các yêu cầu thành các kiến trúc dữ liệu và kiến trúc phần mềm.",
            "Quá trình định nghĩa mối quan hệ giữa các thành phần cấu trúc chính của phần mềm."
        ],
        correctAnswer: 2
    },
    {
        question: "Chỉ ra phát biểu đúng nhất về lập trình thứ lỗi?",
        options: [
            "Lập trình thứ lỗi là cách lập trình đảm bảo cho hệ thống không bị ảnh hưởng gì ngay cả khi có thành phần sinh lỗi.",
            "Lập trình thứ lỗi là cách lập trình đảm bảo cho hệ thống có khả năng dung thứ lỗi khi có thành phần sinh lỗi.",
            "Lập trình thứ lỗi là cách lập trình ngăn chặn sự xâm nhập của các file lạ, bảo toàn dữ liệu khi hệ thống sụp đổ.",
            "Lập trình thứ lỗi là cách lập trình đánh dấu lại các bất thường trong quá trình vận hành phần mềm."
        ],
        correctAnswer: 1
    },
    {
        question: "Định nghĩa dự án?",
        options: [
            "Một tập hợp các nhiệm vụ, được thực hiện bởi một tập thể, nhằm đạt được một kết quả dự kiến với kinh phí dự kiến.",
            "Một nhiệm vụ cần hoàn thành để có được một sản phẩm/dịch vụ duy nhất, trong một thời hạn đã cho với kinh phí dự kiến.",
            "Một tập hồ sơ tài liệu được trình bày chi tiết và có hệ thống các hoạt động, chi phí theo một kế hoạch để đạt được những mục tiêu nhất định.",
            "Một tập hợp các hoạt động có liên quan với nhau được kế hoạch hóa nhằm đạt được các mục tiêu đã định."
        ],
        correctAnswer: 1
    },
    {
        question: "Ưu điểm của mô hình kiến trúc lớp?",
        options: [
            "Sử dụng hiệu quả mạng, phân tán dữ liệu dễ dàng giữa các lớp.",
            "Hiệu quả khi chia sẻ một số lượng lớn dữ liệu, dễ quản lý.",
            "Sự phát triển tăng trưởng của các lớp tách biệt nên dễ nâng cấp.",
            "Khi giao diện một lớp thay đổi, chỉ lớp kế cận ảnh hưởng."
        ],
        correctAnswer: 3
    },
    {
        question: "Ưu điểm của mô hình kho dữ liệu?",
        options: [
            "Khi một hệ con thay đổi, chỉ hệ kế cận ảnh hưởng.",
            "Sử dụng hiệu quả mạng, phân tán dữ liệu dễ dàng.",
            "Hiệu quả khi chia sẻ một số lượng lớn dữ liệu.",
            "Hỗ trợ sự phát triển tăng trưởng của các phân hệ."
        ],
        correctAnswer: 2
    },
    {
        question: "Bảo trì phần mềm được định nghĩa thông qua mô tả bốn hoạt động nào?",
        options: [
            "Bảo trì hệ thống, bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện.",
            "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì thiết kế, bảo trì hoàn thiện.",
            "Bảo trì hiệu chỉnh, bảo trì tiếp hợp, bảo trì hoàn thiện, bảo trì phòng ngừa.",
            "Bảo trì vận hành, bảo trì hiệu chỉnh, bảo trì hoàn thiện, bảo trì phòng ngừa."
        ],
        correctAnswer: 2
    },
    {
        question: "Đặc điếm của mô hình thác nước?",
        options: [
            "Nhanh chóng xác định được yêu cầu.",
            "Tách biệt giữa các pha, tiến hành tuần tự.",
            "Có thể kiểm soát rủi ro ở từng mức tiến hóa.",
            "Sử dụng bộ công cụ case trong quá trình phát triển."
        ],
        correctAnswer: 1
    },
    {
        question: "Theo quan điểm của quản lý dự án thì thiết kế phần mềm được chia thành hai giai đoạn nào?",
        options: [
            "Thiết kế kiến trúc - thiết kế dữ liệu.",
            "Thiết kế dữ liệu - thiết kế thuật toán.",
            "Thiết kế sơ bộ - thiết kế chi tiết.",
            "Thiết kế thành phần - thiết kế giao diện."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong chất lượng thiết kế phần mềm, độ đo 'sự kết dính' là gì?",
        options: [
            "Độ đo về tính khớp lại với nhau của các phần trong mô đun đó.",
            "Độ ghép nối với nhau giữa các đơn vị hay mô đun của hệ thống.",
            "Các phần tử trong mô đun được ghép lại trong một dãy điều khiển.",
            "Các thành phần cùng thực hiện các chức năng tương tự đặt vào một mô đun."
        ],
        correctAnswer: 0
    },
    {
        question: "Một số độ đo chất chất lượng thiết kế phần mềm ?",
        options: [
            "Sự kết dính, sự đầy đủ, sự ghép nối, sự phổ dụng.",
            "Sự kết dính, sự đầy đủ, sự hiểu được, sự thích nghi được.",
            "Sự kết dính, sự ghép nối, sự hiểu được, sự thích nghi được.",
            "Sự đầy đủ, sự hiểu được, sự thích nghi được, sự phổ dụng."
        ],
        correctAnswer: 2
    },
    {
        question: "Thế nào là thiết kế hướng chức năng ?",
        options: [
            "Bản thiết kế được phân giải thành một bộ các chức năng tác động lẫn nhau, các chức năng không dùng chung trạng thái hệ thống.",
            "Bản thiết kế được phân giải thành một bộ các đơn thể tác động lẫn nhau, mỗi đơn thể có một chức năng được xác định rõ ràng.",
            "Bản thiết kế được phân giải thành một bộ các chức năng tác động lẫn nhau, các chức năng có trạng thái giống nhau.",
            "Bản thiết kế được phân giải thành một bộ các chức năng tác động lẫn nhau, mỗi chức năng có trạng thái riêng, không dùng chung trạng thái hệ thống."
        ],
        correctAnswer: 1
    },
    {
        question: "Thế nào là thiết kế hướng đối tượng ?",
        options: [
            "Bản thiết kế được phân giải thành một bộ các đơn thể tác động lẫn nhau, mỗi đơn thể có một chức năng được xác định rõ ràng.",
            "Bản thiết kế nhìn hệ phần mềm như một bộ các đối tượng tương tác với nhau, các đối tượng có chung thông tin trạng thái.",
            "Bản thiết kế nhìn hệ phần mềm như một bộ các đối tượng tương tác với nhau, mỗi đối tượng có những thông tin trạng thái riêng.",
            "Bản thiết kế được phân giải thành một bộ các chức năng, mỗi chức năng có trạng thái riêng, chúng chia sẻ với nhau trạng thái hệ thống."
        ],
        correctAnswer: 2
    },
    {
        question: "Đặc trưng thiết kế hướng chức năng ?",
        options: [
            "Các chức năng có trạng thái cục bộ, chúng chia sẻ với nhau trạng thái hệ thống.",
            "Các chức năng có trạng thái cục bộ, chúng không dùng chung trạng thái hệ thống.",
            "Các chức năng có chung trạng thái, chúng chia sẻ với nhau trạng thái hệ thống.",
            "Thông tin trạng thái bị che dấu, mỗi thành phần có một chức năng xác định."
        ],
        correctAnswer: 0
    },
    {
        question: "Đặc trưng thiết kế hướng đối tượng ?",
        options: [
            "Các đối tượng liên lạc với nhau thông qua trạng thái hệ thống.",
            "Các đối tượng là các thực thể có mối quan hệ chặt chẽ với nhau.",
            "Các đối tượng không phân tán, chỉ hành động tuần tự.",
            "Các đối tượng liên lạc với nhau bằng cách trao đổi thông báo."
        ],
        correctAnswer: 3
    },
    {
        question: "Nhược điểm của mô hình thác nước?",
        options: [
            "Mất nhiều công sức đáp ứng sự thay đổi.",
            "Chậm có phiên bản thực hiện được.",
            "Không chuyển tải hết chức năng phần mềm.",
            "Kiểm soát rủi ro ở từng mức tiến hóa."
        ],
        correctAnswer: 1
    },
    {
        question: "Nhược điểm chiến lược kiểm thử dưới lên?",
        options: [
            "Khó kiểm soát các mức kiểm thử.",
            "Chậm phát hiện lỗi chương trình.",
            "Đánh giá chương trình không hiệu quả.",
            "Chậm có phiên bản thực hiện được."
        ],
        correctAnswer: 3
    },
    {
        question: "Nhược điểm thiết kế hướng đối tượng ?",
        options: [
            "Khó nhận ra các đối tượng của hệ thống.",
            "Thông tin dùng chung không rõ ràng.",
            "Các đối tượng không dùng lại được.",
            "Giảm tính dễ hiểu của bản thiết kế."
        ],
        correctAnswer: 0
    },
    {
        question: "Nhược điểm của mô hình xoắn ốc?",
        options: [
            "Khách hàng phải phát biểu mọi yêu cầu một cách tường minh ngay từ đầu.",
            "Khó thuyết phục khách hàng cách tiếp cận tiến hóa có thể kiểm soát được.",
            "Yêu cầu tri thức chuyên gia đánh giá rủi ro chính xác, năng lực quản lý cao.",
            "Thiếu sự phân tích, đánh giá cẩn thận các khía cạnh của hệ thống cuối."
        ],
        correctAnswer: 1
    },
    {
        question: "Tiến trình quản lý rủi ro được thực hiện theo thứ tự nào?",
        options: [
            "Kiểm soát rủi ro, lập kế hoạch đáp ứng, phân tích rủi ro, xác định rủi ro.",
            "Lập kế hoạch đáp ứng, xác định rủi ro, kiểm soát rủi ro, phân tích rủi ro.",
            "Phân tích rủi ro, xác định rủi ro, kiểm soát rủi ro, lập kế hoạch đáp ứng.",
            "Xác định rủi ro, phân tích rủi ro, lập kế hoạch đáp ứng, kiểm soát rủi ro."
        ],
        correctAnswer: 3
    },
    {
        question: "Trong bảo trì phần mềm, có mấy loại hiệu ứng lề?",
        options: [
            "3",
            "4",
            "2",
            "5"
        ],
        correctAnswer: 0
    },
    {
        question: "Trong kiểm thử phần mềm, có những loại kiểm thử nào?",
        options: [
            "Kiểm thử đơn vị, kiểm thử hệ thống.",
            "Kiểm thử  mô đun, kiểm thử  hệ con.",
            "Kiểm thử hệ thống, kiểm thử chấp nhận.",
            "Kiểm thử thống kê, kiểm thử khiếm khuyết."
        ],
        correctAnswer: 3
    },
    {
        question: "'Thực hiện tất cả các đường dẫn độc lập ít nhất một lần, thực hiện mọi vòng lặp tại các biên và trong phạm vi hoạt động của chúng, thực hiện mọi điều kiện trên các giá trị True/False của chúng,...' Đây là nguyên tắc kiểm thử của phương pháp kiểm thử gì?",
        options: [
            "Kiểm thử đơn vị.",
            "Kiểm thử hộp trắng.",
            "Kiểm thử hộp đen.",
            "Kiểm thử mô đun."
        ],
        correctAnswer: 1
    },
    {
        question: "Mục đích của chiến lược kiểm thử gây áp lực?",
        options: [
            "Phát hiện sớm lỗi thiết và lập trình.",
            "Sớm có phiên bản đưa vào vận hành.",
            "Tìm hiểu giới hạn chịu tải của hệ thống.",
            "Kiểm tra hiệu quả hoạt động thuật toán."
        ],
        correctAnswer: 2
    },
    {
        question: "'Phát hiện sự thiếu sót chức năng, sai sót về giao diện giữa các mô đun, lỗi khởi tạo, lỗi kết thúc,…' Đây là mục đích kiểm thử của phương pháp kiểm thử nào?",
        options: [
            "Kiểm thử hộp đen.",
            "Kiểm thử hộp trắng.",
            "Kiểm thử đơn vị."
        ],
        correctAnswer: 0
    },
    {
        question: "Trong phong cách lập trình, việc xây dựng câu lệnh nên tuân theo quy tắc nào?",
        options: [
            "Viết nhiều câu lệnh trên một dòng.",
            "Mỗi câu lệnh nên đơn giản và trực tiếp.",
            "Xây dựng câu lệnh đơn và thẳng hàng.",
            "Các câu lệnh lồng nhau, tụt lề các dòng lệnh."
        ],
        correctAnswer: 1
    },
    {
        question: "Sơ đồ dưới đây chỉ ra tiến trình gì?",
        image: "images/hinh3.png",
        options: [
            "Thiết kế giao diện chi tiết.",
            "Thiết kế giao diện tổng quát.",
            "Thiết kế giao diện người dùng.",
            "Thiết kế giao diện làm mẫu."
        ],
        correctAnswer: 3
    },
    {
        question: "Trừu tượng hóa dữ liệu là gì?",
        options: [
            "Tập hợp các dữ liệu có tên mô tả cho một đối tượng dữ liệu nào đó.",
            "Một dãy các lệnh có tên, có chức năng xác định và giới hạn.",
            "Đặc tả các cấu trúc dữ liệu được dùng trong việc thực hiện hệ thống.",
            "Đặc tả các thuật toán được dùng cho các dịch vụ của hệ thống."
        ],
        correctAnswer: 0
    },
    {
        question: "Trừu tượng hóa thủ tục là gì?",
        options: [
            "Tập hợp các dữ liệu có tên mô tả cho một đối tượng dữ liệu nào đó.",
            "Đặc tả các cấu trúc dữ liệu dùng trong việc thực hiện hệ thống.",
            "Một dãy các lệnh có tên, có chức năng xác định và giới hạn.",
            "Đặc tả các thuật toán được dùng cho các dịch vụ của hệ thống."
        ],
        correctAnswer: 2
    },
    {
        question: "Mô đun hoá là gì?",
        options: [
            "Đặc tả các thuật toán được dùng cho các dịch vụ của hệ thống.",
            "Phần mềm được chia thành các thành phần có tên riêng và địa chỉ.",
            "Tập hợp các dữ liệu có tên mô tả cho một đối tượng dữ liệu nào đó.",
            "Một dãy các lệnh có tên, có chức năng xác định và giới hạn."
        ],
        correctAnswer: 1
    },
    {
        question: "Trong thiết kế phần mềm, thiết kế chi tiết là gì?",
        options: [
            "Quá trình dịch các yêu cầu thành các kiến trúc dữ liệu và kiến trúc phần mềm.",
            "Việc làm mịn biểu diễn kiến trúc dẫn tới cấu trúc dữ liệu chi tiết và biểu diễn thuật toán.",
            "Chuyển các mô hình dữ liệu thành các cấu trúc dữ liệu cần thiết cho việc cài đặt phần mềm.",
            "Quá trình định nghĩa mối quan hệ giữa các thành phần cấu trúc chính của phần mềm."
        ],
        correctAnswer: 1
    },
    {
        question: "Mục đích của loại kiểm thử khiếm khuyết?",
        options: [
            "Tìm những phần mà chương trình không tuân theo đặc tả.",
            "Kiểm tra sự thi hành và độ tin cậy của chương trình.",
            "Kiểm tra sản phẩm thông qua việc chạy chương trình.",
            "Kiểm tra xem sản phẩm có đáp ứng nhu cầu người dùng."
        ],
        correctAnswer: 0
    },
    {
        question: "Mục đích của kiểm thử gây áp lực?",
        options: [
            "Tiến hành sớm việc thẩm định hệ thống trong quá trình kiểm thử.",
            "Nhanh chóng xác định lỗi thiết kế làm giảm chi phí phần mềm.",
            "Tìm hiểu đặc trưng của hệ thống khi đạt và vượt giới hạn chịu tải.",
            "Sớm có sản phẩm hệ thống thi hành trong quá trình phần mềm."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong thiết kế phần mềm, thiết kế dữ liệu là gì?",
        options: [
            "Thiết kế chi tiết và đặc tả các cấu trúc dữ liệu được dùng trong việc thực hiện hệ thống.",
            "Chuyển các mô hình dữ liệu thành các cấu trúc dữ liệu cần thiết cho việc cài đặt phần mềm.",
            "Các dữ liệu được dùng cho các dịch vụ được thiết kế chi tiết và được đặc tả.",
            "Quá trình dịch các yêu cầu thành các kiến trúc dữ liệu và kiến trúc phần mềm."
        ],
        correctAnswer: 1
    },
    {
        question: "'Kỹ nghệ hệ thống, phân tích, thiết kế, mã hóa, kiểm thử, bảo trì.' Đây là các pha của mô hình kỹ nghệ phần mềm nào?",
        options: [
            "Mô hình làm bản mẫu.",
            "Mô hình xoắn ốc.",
            "Mô hình thác nước.",
            "Mô hình kỹ thuật thế hệ thứ tư."
        ],
        correctAnswer: 0
    },
    {
        question: "Mô hình kỹ nghệ phần mềm nào có thêm pha 'phân tích rủi ro'?",
        options: [
            "Mô hình làm bản mẫu.",
            "Mô hình xoắn ốc.",
            "Mô hình thác nước.",
            "Mô hình kỹ thuật thế hệ thứ tư."
        ],
        correctAnswer: 1
    },
    {
        question: "Những yếu tố chính trong kỹ nghệ phần mềm?",
        options: [
            "Phương pháp, công cụ, thủ tục.",
            "Xác định, phát triển, bảo trì.",
            "Đặc tả yêu cầu, thiết kế, lập trình.",
            "Đặc tả yêu cầu, lập trình, vận hành."
        ],
        correctAnswer: 0
    },
    {
        question: "Ưu điểm chiến lược kiểm thử trên xuống?",
        options: [
            "Phát hiện sớm các lỗi chương trình.",
            "Nhanh chóng đáp ứng yêu cầu người dùng.",
            "Phát hiện sớm các lỗi thiết kế.",
            "Có thể kiểm soát được các mức tiến hóa."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong thiết kế phần mềm, thiết kế kiến trúc là gì?",
        options: [
            "Thiết kế chi tiết và đặc tả các cấu trúc dữ liệu được dùng trong việc thực hiện hệ thống.",
            "Các thuật toán được dùng cho các dịch vụ được thiết kế chi tiết và được đặc tả.",
            "Xác định hệ tổng thể phần mềm bao gồm các hệ con và các quan hệ giữa chúng.",
            "Các giao diện của hệ con với các hệ con khác được thiết kế và ghi thành tài liệu."
        ],
        correctAnswer: 2
    },
    {
        question: "Chỉ ra đặc trưng của ngôn ngữ lập trình?",
        options: [
            "Dễ hiểu và dễ sử dụng đối với người lập trình.",
            "Miêu tả đầy đủ và rõ ràng các tiến trình.",
            "Trình biên dịch hiệu quả, sẵn công cụ phát triển.",
            "Hoạt động hiệu quả trên mọi hệ điều hành."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong phong cách lập trình, hãy chỉ ra cách đơn giản hóa các câu lệnh chương trình gốc?",
        options: [
            "Nên dùng các phép kiểm tra điều kiện phủ định.",
            "Lồng nhau nhiều giữa các điều kiện hay chu trình.",
            "Tránh dùng các phép kiểm tra điều kiện phức tạp.",
            "Không cần dùng các tính năng chuẩn ngôn ngữ."
        ],
        correctAnswer: 2
    },
    {
        question: "Thứ tự năm giai đoạn của quá trình kiểm thử?",
        options: [
            "Kiểm thử hệ con, kiểm thử mô đun, kiểm thử đơn vị, kiểm thử chấp nhận, kiểm thử hệ thống.",
            "Kiểm thử đơn vị, kiểm thử mô đun, kiểm thử hệ con, kiểm thử hệ thống, kiểm thử chấp nhận.",
            "Kiểm thử mô đun, kiểm thử đơn vị, kiểm thử chấp nhận, kiểm thử hệ con, kiểm thử hệ thống.",
            "Kiểm thử chấp nhận, kiểm thử hệ thống, kiểm thử hệ con, kiểm thử mô đun, kiểm thử đơn vị."
        ],
        correctAnswer: 1
    },
    {
        question: "Chỉ ra phát biểu đúng nhất về lập trình phòng thủ?",
        options: [
            "Lập trình phong thủ là cách lập trình đảm bảo hệ thống không bị ảnh hưởng khi có thành phần sinh lỗi.",
            "Lập trình phong thủ là cách lập trình ngăn chặn sự xâm nhập của các file lạ, bảo toàn dữ liệu khi hệ thống sụp đổ.",
            "Lập trình phong thủ là lập trình để có thể tự động sửa chữa các lỗi có thể xảy ra.",
            "Lập trình phong thủ là cách lập trình đánh dấu lại các bất thường trong quá trình vận hành phần mềm."
        ],
        correctAnswer: 2
    },
    {
        question: "Thứ tự bốn hoạt động trong lập trình thứ lỗi ?",
        options: [
            "Phát hiện lỗi, sửa lỗi, hồi phục sau khi gặp lỗi, định ra mức độ thiệt hại.",
            "Phát hiện lỗi, sửa lỗi, định ra mức độ thiệt hại, làm báo cáo chi phí.",
            "Phát hiện lỗi, định ra mức độ thiệt hại, hồi phục sau khi gặp lỗi, chữa lỗi.",
            "Phát hiện lỗi, ngăn chặn lỗi, sửa lỗi, hồi phục sau khi gặp lỗi."
        ],
        correctAnswer: 2
    },
    {
        question: "Để tăng tính hiệu quả chương trình có thể áp dụng hướng dẫn nào sau đây?",
        options: [
            "Sử dụng những chu kỳ lồng nhau và danh sách phức tạp.",
            "Sử dụng những chu kỳ lồng nhau và trộn lẫn kiểu dữ liệu.",
            "Tránh dùng mảng nhiều chiều, con trỏ và danh sách phức tạp.",
            "Dùng mảng nhiều chiều, con trỏ và phép toán số học nhanh."
        ],
        correctAnswer: 2
    },
    {
        question: "Nhược điểm của mô hình kiến trúc khách-phục vụ?",
        options: [
            "Tiến hóa dữ liệu là khó khăn và đắt đỏ.",
            "Chia sẻ, trao đổi dữ liệu là không hiệu quả.",
            "Dư thừa server, khó tìm server hay dịch vụ rỗi.",
            "Khi một hệ con thay đổi ảnh hưởng đến hệ con khác."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong lập trình hướng hiệu quả, để tăng hiệu quả vào/ra có thể áp dụng hướng dẫn nào sau đây?",
        options: [
            "Mọi việc vào/ra không nên qua bộ đệm.",
            "Không xếp khối vào/ra với thiết bị bộ nhớ phụ.",
            "Số các yêu cầu vào/ra nên giữ mức tối thiểu.",
            "Với bộ nhớ phụ dùng phương pháp thâm nhập nhanh nhất."
        ],
        correctAnswer: 2
    },
    {
        question: "Thứ tự các bước thực hiện trong kỹ thuật phân hoạch tương đương của kiểm thử hộp đen?",
        options: [
            "Chọn dữ liệu đại diện cho mỗi lớp tương đương, kết hợp các dữ liệu để tạo ra bộ dữ liệu kiểm thử, xác định các lớp tương đương từ miền dữ liệu vào.",
            "Xác định các lớp tương đương từ miền dữ liệu vào, chọn dữ liệu đại diện cho mỗi lớp tương đương, kết hợp các dữ liệu để tạo ra bộ dữ liệu kiểm thử.",
            "Xác định các lớp tương đương từ miền dữ liệu vào, kết hợp các dữ liệu để tạo ra bộ dữ liệu kiểm thử, chọn dữ liệu đại diện cho mỗi lớp tương đương.",
            "Kết hợp các dữ liệu để tạo ra bộ dữ liệu kiểm thử, chọn dữ liệu đại diện cho mỗi lớp tương đương, xác định các lớp tương đương từ miền dữ liệu vào."
        ],
        correctAnswer: 1
    },
    {
        question: "Trong kỹ thuật phân hoạch tương đương của kiểm thử hộp đen, nếu điều kiện vào xác định một miền giá trị thì phân hoạch kiểm thử thành ?",
        options: [
            "3 lớp tương đương",
            "2 lớp tương đương",
            "1 lớp tương đương",
            "4 lớp tương đương"
        ],
        correctAnswer: 0
    },
    {
        question: "Trong kỹ thuật phân hoạch tương đương của kiểm thử hộp đen, nếu điều kiện vào yêu cầu một giá trị xác định thì phân hoạch kiểm thử thành ?",
        options: [
            "2 lớp tương đương",
            "3 lớp tương đương",
            "1 lớp tương đương",
            "4 lớp tương đương"
        ],
        correctAnswer: 1
    },
    {
        question: "Trong kỹ thuật phân hoạch tương đương của kiểm thử hộp đen, nếu điều kiện đầu vào xác định một phần tử của tập hợp thì phân hoạch kiểm thử thành ?",
        options: [
            "3 lớp tương đương",
            "1 lớp tương đương",
            "2 lớp tương đương",
            "4 lớp tương đương"
        ],
        correctAnswer: 2
    },
    {
        question: "Trong kỹ thuật phân hoạch tương đương của kiểm thử hộp đen, nếu điều kiện đầu vào là một biến hoặc một biểu thức logic thì phân hoạch kiểm thử thành ?",
        options: [
            "3 lớp tương đương",
            "1 lớp tương đương",
            "2 lớp tương đương",
            "4 lớp tương đương"
        ],
        correctAnswer: 2
    },
    {
        question: "Trong kỹ thuật phân tích giá trị biên, nếu điều kiện vào xác định một miền được giới hạn bởi các giá trị a và b thì các trường hợp kiểm thử được ...?",
        options: [
            "Xác định ngay tại a và b đồng thời ngay trên a và ngay dưới b.",
            "Xác định ngay tại a và b đồng thời ngay dưới a và ngay trên b.",
            "Xác định ngay tại a và b đồng thời ngay trên và ngay dưới a và b.",
            "Xác định ngay trên, ngay dưới a, tại b và ngay trên, ngay dưới b."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong kỹ thuật phân tích giá trị biên, nếu điều kiện vào xác định ngay một số giá trị thì xây dựng trường hợp kiểm thử cho...?",
        options: [
            "Giá trị cực đại, cực tiểu, các giá trị ngay trên, ngay dưới giá trị cực đại, cực tiểu.",
            "Giá trị cực đại, cực tiểu, các giá trị ngay trên giá trị cực đại và cực tiểu.",
            "Giá trị cực đại, cực tiểu, các giá trị ngay trên giá trị cực đại và ngay dưới giá trị cực tiểu.",
            "Giá trị cực đại, cực tiểu, các giá trị ngay dưới giá trị cực đại và ngay trên giá trị cực tiểu."
        ],
        correctAnswer: 0
    },
    {
        question: "Trong kỹ thuật phân tích giá trị biên, nếu cấu trúc dữ liệu chương trình bên trong được quy định là các biên thì thiết kế trường hợp kiểm thử ?",
        options: [
            "Thực thi cấu trúc dữ liệu tại giá trị cực đại.",
            "Thực thi cấu trúc dữ liệu tại giá trị cực tiểu.",
            "Thực thi cấu trúc dữ liệu tại giá trị bất kỳ.",
            "Thực thi cấu trúc dữ liệu tại biên của nó."
        ],
        correctAnswer: 3
    },
    {
        question: "Trong kiểm tra phần mềm, hoạt động xác minh là gì ?",
        options: [
            "Sự kiểm tra xem sản phẩm có đúng với đặc tả không, có hoạt động tốt không.",
            "Sự kiểm tra xem sản phẩm có đáp ứng được nhu cầu người dùng không.",
            "Sự kiểm tra xem chương trình có lỗi không và tiến hành sửa lỗi để sản phẩm hoạt động tốt.",
            "Sự kiểm tra xem sản phẩm có hoạt động tốt không, có đáp ứng yêu cầu người dùng không."
        ],
        correctAnswer: 0
    },
    {
        question: "Trong kiểm tra phần mềm, hoạt động thẩm định là gì ?",
        options: [
            "Sự kiểm tra xem sản phẩm có đúng với đặc tả không.",
            "Sự kiểm tra xem sản phẩm có lỗi không và đáp ứng yêu cầu người dùng không.",
            "Sự kiểm tra xem sản phẩm có hoạt động tốt không.",
            " kiểm tra xem sản phẩm có đáp ứng được nhu cầu người dùng không."
        ],
        correctAnswer: 3
    },
    {
        question: "Trong chất lượng thiết kế phần mềm, kết dính logic là gì ?",
        options: [
            "Tất cả các phần tử của mô đun cùng thao tác trên một dữ liệu vào và đưa cùng một dữ liệu ra.",
            "Tất cả các thành phần cùng hoạt hóa một lúc được bó lại với nhau.",
            "Các phần tử trong mô đun được ghép lại trong một dãy điều khiển.",
            "Các thành phần cùng thực hiện các chức năng tương tự được đặt vào cùng một mô đun."
        ],
        correctAnswer: 3
    },
    {
        question: "Thế nào là bảo trì cấu trúc?",
        options: [
            "Fhần mềm có cấu hình duy nhất là mã nguồn, hoạt động bảo trì bắt đầu bằng việc đánh giá chi tiết mã nguồn.",
            "Bảo trì đáp ứng các thay đổi những chức năng đã có và các mở rộng tổng quát được người dùng gửi đến.",
            "Phần mềm có cấu hình hoàn thiện, nhiệm vụ bảo trì bắt đầu bằng việc đánh giá các tài liệu thiết kế.",
            "Bảo trì cải thiện các tính năng bảo trì như độ tin cậy, cung cấp nền tảng tốt hơn cho những mở rộng sau này."
        ],
        correctAnswer: 2
    },
    {
        question: "Chỉ ra đặc trưng của ngôn ngữ lập trình?",
        options: [
            "Dễ hiểu và dễ sử dụng đối với người lập trình.",
            "Miêu tả đầy đủ và rõ ràng các tiến trình.",
            "Trình biên dịch hiệu quả, sẵn công cụ phát triển.",
            "Hoạt động hiệu quả trên mọi hệ điều hành."
        ],
        correctAnswer: 2
    },
    {
        question: " Đơn yêu cầu bảo trì được cung cấp cho đối tượng nào sử dụng?",
        options: [
            "Người bảo trì phần mềm.",
            "Người sử dụng phần mềm.",
            "Người lập trình phần mềm.",
            "Người thiết kế phần mềm."
        ],
        correctAnswer: 1
    },
    {
        question: "Trong chất lượng thiết kế phần mềm, kết dính thủ tục là gì ?",
        options: [
            "Các phần tử trong mô đun được ghép lại trong một dãy điều khiển.",
            "Tất cả các thành phần cùng hoạt hóa một lúc được bó lại với nhau.",
            "Trong một mô đun, ra của phần tử này là đầu vào của phần tử khác.",
            "Các công việc không liên quan với nhau, song lại bị bó vào một mô đun."
        ],
        correctAnswer: 0
    },
    {
        question: "\"Tất cả các phần tử của mô đun cùng thao tác trên một dữ liệu vào và đưa cùng một dữ liệu ra\" thuộc loại kết dính nào trong chất lượng thiết kế phần mềm?",
        options: [
            "Kết dính tuần tự.",
            "Kết dính thời điểm.",
            "Kết dính truyền thông.",
            "Kết dính chức năng."
        ],
        correctAnswer: 2
    },
    {
        question: "Mô hình tiến trình tổng quát thiết kế được thực hiện theo thứ tự?",
        options: [
            "Phác thảo thiết kế phi hình thức, thiết kế phi hình thức, thiết kế hình thức hơn, thiết kế chi tiết cuối cùng.",
            "Phác thảo thiết kế phi hình thức, thiết kế phi hình thức, thiết kế chi tiết cuối cùng, thiết kế hình thức hơn.",
            "Thiết kế chi tiết cuối cùng, thiết kế phi hình thức, phác thảo thiết kế phi hình thức, thiết kế hình thức hơn.",
            "Thiết kế hình thức hơn, phác thảo thiết kế phi hình thức, thiết kế phi hình thức, thiết kế chi tiết cuối cùng."
        ],
        correctAnswer: 0
    },
    {
        question: "\"Đưa ra các cách làm về mặt kỹ thuật để xây dựng phần mềm\" thuộc yếu tố nào trong kỹ nghệ phần mềm?",
        options: [
            "Phương pháp",
            "Công cụ",
            "Thủ tục",
            "Kỹ thuật"
        ],
        correctAnswer: 0
    },
    {
        question: "Trong lập trình hướng hiệu quả, để tăng hiệu quả vào/ra có thể áp dụng hướng dẫn nào sau đây?",
        options: [
            "Mọi việc vào/ra không nên qua bộ đệm.",
            "Không xếp khối vào/ra với thiết bị bộ nhớ phụ.",
            "Số các yêu cầu vào/ra nên giữ mức tối thiểu.",
            "Với bộ nhớ phụ dùng phương pháp thâm nhập nhanh nhất."
        ],
        correctAnswer: 2
    },
    {
        question: "Loại kiểm thử nào được tiến hành bởi một nhóm nhỏ người sử dụng dưới sự hướng dẫn của người phát triển, thẩm định tính dùng được của hệ thống?",
        options: [
            "Kiểm thử alpha",
            "Kiểm thử beta",
            "Kiểm thử thống kê",
            "Kiểm thử khiếm khuyết"
        ],
        correctAnswer: 0
    },
    {
        question: "Tiêu chuẩn \"tính hiệu quả\" trong đánh giá phần mềm là gì?",
        options: [
            "Phần mềm không gây nên các thiệt hại vật lý và kinh tế khi hệ thống thất bại.",
            "Phần mềm có thể dễ dàng sửa chữa và nâng cấp được.",
            "Phần mềm không được lãng phí các tài nguyên của hệ thống.",
            "Phần mềm có giao diện người dùng thích hợp, có tư liệu hướng dẫn và các tiện ích trợ giúp đầy đủ."
        ],
        correctAnswer: 0
    }
];

// Export the questions array
window.questions = questions;
