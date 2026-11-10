/*
 * PIO presentation translations (EN source -> VI, ZH Simplified).
 *
 * How it works: the page is authored in English. This script swaps every
 * visible text node (and a few attributes) whose English text matches a key
 * below, and watches the DOM so text the page builds later (map lightbox,
 * sitemap menu, captions) is translated too. Strings without an entry stay
 * in English, which is intended for carrier names, port codes, depot/ICD
 * names, phone numbers and e-mails.
 *
 * To add or fix a translation: edit the entry whose key is the exact English
 * text shown on the page (whitespace is normalised, so line breaks don't matter).
 */
(function () {
  'use strict';

  var T = {
    // ---- Chrome: header, footer, menu, hints -------------------------------
    'CAPABILITIES': { vi: 'NĂNG LỰC', zh: '公司能力' },
    'Presentation Deck': { vi: 'Bài thuyết trình', zh: '演示文稿' },
    'Sitemap Dashboard': { vi: 'Danh mục trang', zh: '页面目录' },
    'Full screen on iPhone': { vi: 'Toàn màn hình trên iPhone', zh: '在 iPhone 上全屏显示' },
    'Safari does not let a website remove its address bar directly. Tap': {
      vi: 'Safari không cho phép website tự ẩn thanh địa chỉ. Hãy nhấn',
      zh: 'Safari 不允许网页直接隐藏地址栏。请点击'
    },
    'Share': { vi: 'Chia sẻ', zh: '分享' },
    'Add to Home Screen': { vi: 'Thêm vào MH chính', zh: '添加到主屏幕' },
    ', then open PIO from the new icon for a true full-screen presentation.': {
      vi: ', sau đó mở PIO từ biểu tượng mới để trình chiếu toàn màn hình.',
      zh: '，然后从新图标打开 PIO，即可全屏演示。'
    },
    'PIO Logistics Co., Ltd.': { vi: 'Công ty TNHH PIO Logistics', zh: 'PIO 物流有限公司' },
    'Ho Chi Minh City, Vietnam': { vi: 'TP. Hồ Chí Minh, Việt Nam', zh: '越南 · 胡志明市' },
    "Your shipment — PIO's passion.": { vi: 'Lô hàng của bạn — Đam mê của PIO.', zh: '您的货物，PIO 的热忱。' },
    'Swipe, tap or use arrow keys': { vi: 'Vuốt, chạm hoặc dùng phím mũi tên', zh: '滑动、点击或使用方向键' },
    'For the best presentation view, rotate your iPad to landscape.': {
      vi: 'Để xem trình chiếu tốt nhất, hãy xoay iPad sang chiều ngang.',
      zh: '为获得最佳演示效果，请将 iPad 横屏。'
    },
    'Reset map': { vi: 'Đặt lại bản đồ', zh: '重置地图' },
    'Click to explore.': { vi: 'Nhấn để xem chi tiết.', zh: '点击查看详情。' },

    // ---- Slide titles (data-title, menu, browser tab) ----------------------
    'Welcome': { vi: 'Giới thiệu', zh: '欢迎' },
    'Network Certificates': { vi: 'Chứng nhận mạng lưới', zh: '网络认证' },
    'Vietnam Port Coverage': { vi: 'Mạng lưới cảng Việt Nam', zh: '越南港口覆盖' },
    'Cat Lai Port': { vi: 'Cảng Cát Lái', zh: '吉莱港' },
    'Hai Phong Port': { vi: 'Cảng Hải Phòng', zh: '海防港' },
    'Sea Freight': { vi: 'Vận tải đường biển', zh: '海运' },
    'Consolidation': { vi: 'Gom hàng lẻ', zh: '拼箱集运' },
    'Air Freight': { vi: 'Vận tải hàng không', zh: '空运' },
    'Project Cargo': { vi: 'Hàng dự án', zh: '项目货物' },
    'Trucking & Unloading': { vi: 'Vận tải bộ & dỡ hàng', zh: '陆运与卸货' },
    'Customs Clearance': { vi: 'Thủ tục hải quan', zh: '报关清关' },
    'Contact': { vi: 'Liên hệ', zh: '联系我们' },

    // ---- 01 Cover ----------------------------------------------------------
    'Company capabilities': { vi: 'Năng lực công ty', zh: '公司能力' },
    'One team.': { vi: 'Một đội ngũ.', zh: '一支团队，' },
    'Three core services.': { vi: 'Ba dịch vụ cốt lõi.', zh: '三大核心服务。' },
    'Based in Ho Chi Minh City, PIO Logistics connects local execution with global freight solutions.': {
      vi: 'Có trụ sở tại TP. Hồ Chí Minh, PIO Logistics kết nối năng lực triển khai tại chỗ với giải pháp vận tải toàn cầu.',
      zh: 'PIO Logistics 总部位于胡志明市，将本地执行能力与全球货运方案紧密结合。'
    },
    'Established in 2020, our dedicated team of 18 members operates across three strategic locations: Ho Chi Minh (12), Da Nang (3), and Hai Phong (3).': {
      vi: 'Thành lập năm 2020, đội ngũ 18 thành viên của chúng tôi hoạt động tại ba điểm chiến lược: TP. Hồ Chí Minh (12), Đà Nẵng (3) và Hải Phòng (3).',
      zh: '公司成立于 2020 年，18 人的专业团队分布在三个战略据点：胡志明市（12 人）、岘港（3 人）和海防（3 人）。'
    },
    'International Freight': { vi: 'Vận tải quốc tế', zh: '国际货运' },
    'Sea, air and project cargo from Vietnam to key trade lanes.': {
      vi: 'Hàng đường biển, hàng không và hàng dự án từ Việt Nam đi các tuyến chính.',
      zh: '从越南出发的海运、空运及项目货物，覆盖主要贸易航线。'
    },
    'Trucking': { vi: 'Vận tải bộ', zh: '陆运' },
    'Truck planning, unloading equipment and on-site manpower.': {
      vi: 'Bố trí xe, thiết bị dỡ hàng và nhân lực tại hiện trường.',
      zh: '车辆安排、卸货设备及现场人力。'
    },
    'Clear documentation, transparent costs, no hidden fees.': {
      vi: 'Chứng từ rõ ràng, chi phí minh bạch, không phí ẩn.',
      zh: '单证清晰，费用透明，无隐藏收费。'
    },

    // ---- 02 Certificates ---------------------------------------------------
    '01 · Network certificates': { vi: '01 · Chứng nhận mạng lưới', zh: '01 · 网络认证' },
    'Global Network Certificates': { vi: 'Chứng nhận mạng lưới toàn cầu', zh: '全球网络认证' },

    // ---- 03 Port coverage --------------------------------------------------
    '02 · Port coverage': { vi: '02 · Mạng lưới cảng', zh: '02 · 港口覆盖' },
    'Three gateways.': { vi: 'Ba cửa ngõ.', zh: '三大门户，' },
    'One PIO team.': { vi: 'Một đội ngũ PIO.', zh: '一个 PIO 团队。' },
    "PIO handles export and import cargo through Vietnam's key seaport gateways: Ho Chi Minh, Da Nang and Hai Phong.": {
      vi: 'PIO xử lý hàng xuất nhập khẩu qua các cửa ngõ cảng biển trọng điểm của Việt Nam: TP. Hồ Chí Minh, Đà Nẵng và Hải Phòng.',
      zh: 'PIO 通过越南主要海港门户（胡志明市、岘港、海防）承运进出口货物。'
    },
    'CAT LAI PORT': { vi: 'CẢNG CÁT LÁI', zh: '吉莱港' },
    'DA NANG PORT': { vi: 'CẢNG ĐÀ NẴNG', zh: '岘港港' },
    'HAI PHONG PORT': { vi: 'CẢNG HẢI PHÒNG', zh: '海防港' },
    'Hai Phong': { vi: 'Hải Phòng', zh: '海防' },
    'Da Nang': { vi: 'Đà Nẵng', zh: '岘港' },
    'Da Nang Port': { vi: 'Cảng Đà Nẵng', zh: '岘港港' },
    'Ho Chi Minh': { vi: 'Hồ Chí Minh', zh: '胡志明市' },
    'Port release': { vi: 'Giải phóng hàng tại cảng', zh: '港口放货' },
    'Container release, document coordination and local port follow-up.': {
      vi: 'Lấy container, điều phối chứng từ và theo dõi tại cảng.',
      zh: '提柜放行、单证协调及港口现场跟进。'
    },
    'Depot advice': { vi: 'Tư vấn depot', zh: '堆场建议' },
    'Empty pickup, stuffing plan and carrier depot guidance.': {
      vi: 'Lấy vỏ rỗng, phương án đóng hàng và hướng dẫn depot theo hãng tàu.',
      zh: '空箱提取、装箱方案及船公司堆场指引。'
    },
    'Final delivery': { vi: 'Giao hàng cuối', zh: '末端派送' },
    'Truck planning from gateway to warehouse with one accountable team.': {
      vi: 'Điều xe từ cảng về kho do một đội ngũ chịu trách nhiệm xuyên suốt.',
      zh: '从港口到仓库的车辆安排，由同一团队全程负责。'
    },
    'Vietnam map showing Ho Chi Minh, Da Nang and Hai Phong port coverage': {
      vi: 'Bản đồ Việt Nam thể hiện các cảng TP. Hồ Chí Minh, Đà Nẵng và Hải Phòng',
      zh: '越南地图：胡志明市、岘港及海防港口覆盖'
    },
    'Vietnam port coverage: North | Central | South': { vi: 'Mạng lưới cảng: Bắc | Trung | Nam', zh: '越南港口覆盖：北部 | 中部 | 南部' },

    // ---- 04 Cat Lai --------------------------------------------------------
    '03 · Ho Chi Minh gateway': { vi: '03 · Cửa ngõ TP. Hồ Chí Minh', zh: '03 · 胡志明市门户' },
    'Cat Lai Port.': { vi: 'Cảng Cát Lái.', zh: '吉莱港，' },
    'Strong Import & Export.': { vi: 'Mạnh nhập khẩu & xuất khẩu.', zh: '进出口优势突出。' },
    "Cat Lai is PIO's strongest gateway for import and export cargo, with our largest cargo volume handled here and a strong focus on import shipments.": {
      vi: 'Cát Lái là cửa ngõ mạnh nhất của PIO cho hàng xuất nhập khẩu, nơi chúng tôi xử lý sản lượng lớn nhất, đặc biệt mạnh về hàng nhập.',
      zh: '吉莱港是 PIO 最核心的进出口门户，承运量最大，尤其擅长进口业务。'
    },
    'India': { vi: 'Ấn Độ', zh: '印度' },
    'Australia': { vi: 'Úc', zh: '澳大利亚' },
    'Americas': { vi: 'Châu Mỹ', zh: '美洲' },
    'Latin America': { vi: 'Mỹ Latinh', zh: '拉丁美洲' },
    'Depot, warehouse & empty container support': {
      vi: 'Hỗ trợ depot, kho bãi & container rỗng',
      zh: '堆场、仓库及空箱支持'
    },
    "For Cat Lai operations, we can support import cargo via warehouses 2 and 3, and export cargo via warehouses 1 and 5. We also advise empty pickup and stuffing options based on each carrier's actual depot service.": {
      vi: 'Tại Cát Lái, chúng tôi hỗ trợ hàng nhập qua kho 2 và 3, hàng xuất qua kho 1 và 5. Chúng tôi cũng tư vấn điểm lấy vỏ rỗng và phương án đóng hàng theo depot thực tế của từng hãng tàu.',
      zh: '在吉莱港，进口货物可经 2 号、3 号仓库操作，出口货物经 1 号、5 号仓库操作。我们还会根据各船公司的实际堆场服务，建议提空箱及装箱方案。'
    },

    // ---- 05 Hai Phong ------------------------------------------------------
    '04 · Northern gateway': { vi: '04 · Cửa ngõ miền Bắc', zh: '04 · 北部门户' },
    'Hai Phong Port.': { vi: 'Cảng Hải Phòng.', zh: '海防港，' },
    'Wide trade lanes.': { vi: 'Tuyến thương mại rộng.', zh: '航线覆盖广。' },
    'From Hai Phong, PIO can build competitive freight options to China, the Americas, Latin America, Europe and India - supported by practical carrier and depot advice.': {
      vi: 'Từ Hải Phòng, PIO xây dựng phương án cước cạnh tranh đi Trung Quốc, châu Mỹ, Mỹ Latinh, châu Âu và Ấn Độ, kèm tư vấn thực tế về hãng tàu và depot.',
      zh: 'PIO 可从海防提供至中国、美洲、拉丁美洲、欧洲及印度的高性价比运价方案，并提供实用的船公司与堆场建议。'
    },
    'China': { vi: 'Trung Quốc', zh: '中国' },
    'Americas / Latin America': { vi: 'Châu Mỹ / Mỹ Latinh', zh: '美洲 / 拉丁美洲' },
    'Europe': { vi: 'Châu Âu', zh: '欧洲' },
    'Practical carrier advice': { vi: 'Tư vấn hãng tàu thực tế', zh: '实用船公司建议' },
    'We check carrier service, empty pickup point, depot availability and container stuffing options before dispatch, then advise the most practical plan for each shipment.': {
      vi: 'Chúng tôi kiểm tra dịch vụ hãng tàu, điểm lấy vỏ, tình trạng depot và phương án đóng hàng trước khi điều xe, rồi đề xuất phương án thực tế nhất cho từng lô.',
      zh: '派车前，我们会核实船公司服务、提空点、堆场情况及装箱方案，再为每票货物推荐最实际的方案。'
    },

    // ---- 06 Sea freight ----------------------------------------------------
    '10 min': { vi: '10 phút', zh: '10 分钟' },
    'response target': { vi: 'thời gian phản hồi', zh: '响应目标' },
    '05 · Sea freight': { vi: '05 · Vận tải biển', zh: '05 · 海运' },
    'Sea freight.': { vi: 'Vận tải biển.', zh: '海运，' },
    'Fast export rates.': { vi: 'Báo giá xuất khẩu nhanh.', zh: '出口报价快。' },
    'Strong ocean freight lanes from Vietnam to China, India, Australia and the Middle East - with fast quotation and practical carrier routing.': {
      vi: 'Tuyến biển mạnh từ Việt Nam đi Trung Quốc, Ấn Độ, Úc và Trung Đông, báo giá nhanh và lộ trình hãng tàu thực tế.',
      zh: '越南至中国、印度、澳大利亚及中东的优势海运航线，报价迅速，船公司路线安排务实。'
    },
    'Core lane': { vi: 'Tuyến chính', zh: '核心航线' },
    'Vietnam - China': { vi: 'Việt Nam - Trung Quốc', zh: '越南 - 中国' },
    'Vietnam - India': { vi: 'Việt Nam - Ấn Độ', zh: '越南 - 印度' },
    'Vietnam - Australia': { vi: 'Việt Nam - Úc', zh: '越南 - 澳大利亚' },
    'Vietnam - Middle East': { vi: 'Việt Nam - Trung Đông', zh: '越南 - 中东' },
    'Initial response within 10 minutes.': { vi: 'Phản hồi đầu tiên trong 10 phút.', zh: '10 分钟内首次回复。' },
    'During business hours, every enquiry receives a prompt, informative reply with relevant details, practical next steps and full support from our team.': {
      vi: 'Trong giờ làm việc, mọi yêu cầu đều được phản hồi nhanh, đầy đủ thông tin, kèm bước tiếp theo cụ thể và sự hỗ trợ trọn vẹn từ đội ngũ.',
      zh: '工作时间内，每一条询价都会得到及时、详尽的回复，附上具体的下一步安排，并由团队全程跟进。'
    },
    'Door-to-door': { vi: 'Tận nơi', zh: '门到门' },
    'Marine insurance': { vi: 'Bảo hiểm hàng hải', zh: '海运保险' },

    // ---- 07 Consolidation --------------------------------------------------
    'consolidation': { vi: 'gom hàng lẻ', zh: '拼箱' },
    '06 · Consol / LCL': { vi: '06 · Gom hàng / LCL', zh: '06 · 集运 / 拼箱' },
    'Consol cargo.': { vi: 'Hàng gom.', zh: '拼箱货物，' },
    'Built around details.': { vi: 'Chú trọng từng chi tiết.', zh: '细节至上。' },
    'We consolidate fabric rolls and mixed shipments with clear packing, loading and delivery coordination from factory to port.': {
      vi: 'Chúng tôi gom các lô vải cuộn và hàng hỗn hợp, điều phối rõ ràng khâu đóng gói, xếp hàng và giao nhận từ nhà máy đến cảng.',
      zh: '我们承接布卷及混装货物的集运，从工厂到港口全程清晰协调包装、装货与交接。'
    },
    'Consolidation / LCL': { vi: 'Gom hàng / LCL', zh: '集运 / 拼箱' },
    'Combine smaller shipments into practical sea freight plans.': {
      vi: 'Ghép các lô nhỏ thành phương án vận tải biển hợp lý.',
      zh: '将小批量货物整合为实用的海运方案。'
    },
    'Factory pickup & loading': { vi: 'Nhận hàng tại nhà máy & xếp hàng', zh: '工厂提货与装货' },
    'Coordinate pickup, cargo checking and warehouse handover.': {
      vi: 'Điều phối nhận hàng, kiểm hàng và bàn giao tại kho.',
      zh: '协调提货、验货及仓库交接。'
    },
    'Packing visibility': { vi: 'Minh bạch đóng gói', zh: '包装全程可视' },
    'Photo updates and practical cargo protection before export.': {
      vi: 'Cập nhật hình ảnh và bảo vệ hàng hóa thực tế trước khi xuất.',
      zh: '出口前提供照片更新，并做好货物防护。'
    },

    // ---- 08 Air freight ----------------------------------------------------
    '07 · Air freight': { vi: '07 · Vận tải hàng không', zh: '07 · 空运' },
    'Air freight.': { vi: 'Hàng không.', zh: '空运，' },
    'Time-defined delivery.': { vi: 'Giao hàng đúng hẹn.', zh: '准时交付。' },
    'Standardized connections and fixed schedules on major air routes, with handling for urgent cargo, special cargo and documentation-sensitive shipments.': {
      vi: 'Kết nối chuẩn hóa và lịch bay cố định trên các tuyến chính, xử lý hàng gấp, hàng đặc biệt và lô hàng yêu cầu chứng từ chặt chẽ.',
      zh: '主要航线衔接规范、航班固定，可处理紧急货物、特殊货物及单证要求严格的货物。'
    },
    'Door-to-door service': { vi: 'Dịch vụ tận nơi', zh: '门到门服务' },
    'Airport-to-airport': { vi: 'Sân bay đến sân bay', zh: '机场到机场' },
    'Express service': { vi: 'Dịch vụ hỏa tốc', zh: '快递服务' },
    'Dangerous cargo': { vi: 'Hàng nguy hiểm', zh: '危险品' },
    'Air': { vi: 'Hàng không', zh: '空运' },
    'urgent & special cargo': { vi: 'hàng gấp & đặc biệt', zh: '紧急与特殊货物' },

    // ---- 09 Project cargo --------------------------------------------------
    'Heavy': { vi: 'Hàng nặng', zh: '重货' },
    'oversize cargo': { vi: 'hàng quá khổ', zh: '超限货物' },
    '08 · Project cargo': { vi: '08 · Hàng dự án', zh: '08 · 项目货物' },
    'Heavy, oversized': { vi: 'Hàng nặng, quá khổ', zh: '重货、超限货，' },
    'and protected.': { vi: 'và được bảo vệ.', zh: '安全有保障。' },
    'Planning for cargo that needs more than a standard container move: site supervision, packing, lashing, securing and multimodal coordination.': {
      vi: 'Lên kế hoạch cho hàng vượt quá một chuyến container thông thường: giám sát hiện trường, đóng gói, chằng buộc, gia cố và điều phối đa phương thức.',
      zh: '为超出常规集装箱运输的货物制定方案：现场监装、包装、绑扎、加固及多式联运协调。'
    },
    'Oversize & heavy cargo': { vi: 'Hàng quá khổ & quá tải', zh: '超限与重型货物' },
    'Vehicle selection, route planning and safe loading supervision.': {
      vi: 'Chọn phương tiện, khảo sát tuyến đường và giám sát xếp hàng an toàn.',
      zh: '车辆选型、路线规划及安全装货监督。'
    },
    'Lashing & securing': { vi: 'Chằng buộc & gia cố', zh: '绑扎与加固' },
    'Cargo protection, stability checks and practical handling method.': {
      vi: 'Bảo vệ hàng hóa, kiểm tra độ ổn định và phương án xử lý thực tế.',
      zh: '货物防护、稳定性检查及实用的操作方法。'
    },
    'Packing & on-site handling': { vi: 'Đóng gói & xử lý tại chỗ', zh: '包装与现场操作' },
    'Wooden crate, wrapping, palletization and export-ready preparation.': {
      vi: 'Đóng thùng gỗ, quấn bọc, đóng pallet và chuẩn bị sẵn sàng xuất khẩu.',
      zh: '木箱、缠绕包装、打托盘及出口前准备。'
    },

    // ---- 10 Trucking -------------------------------------------------------
    '09 • Trucking': { vi: '09 • Vận tải bộ', zh: '09 • 陆运' },
    'Trucking with': { vi: 'Vận tải bộ kèm', zh: '陆运服务，' },
    'unloading support.': { vi: 'hỗ trợ dỡ hàng.', zh: '附带卸货支持。' },
    'From port or airport release to the customer warehouse, our team plans the truck, unloading method and on-site manpower.': {
      vi: 'Từ lúc lấy hàng tại cảng hoặc sân bay đến kho khách hàng, đội ngũ chúng tôi lên phương án xe, cách dỡ hàng và nhân lực tại chỗ.',
      zh: '从港口或机场提货到客户仓库，我们的团队统筹安排车辆、卸货方式及现场人力。'
    },
    'Tail-lift truck': { vi: 'Xe có bửng nâng', zh: '尾板车' },
    'Forklift coordination': { vi: 'Điều phối xe nâng', zh: '叉车协调' },
    'On-site workers': { vi: 'Công nhân tại chỗ', zh: '现场工人' },
    'Pallet jack / manual unloading': { vi: 'Xe nâng tay / dỡ thủ công', zh: '手动叉车 / 人工卸货' },
    'Container / van truck': { vi: 'Xe container / xe thùng', zh: '集装箱车 / 厢式货车' },
    'Flatbed & special cargo': { vi: 'Xe sàn & hàng đặc biệt', zh: '平板车与特殊货物' },
    'Doorstep execution.': { vi: 'Thực hiện tận nơi.', zh: '送货上门，执行到位。' },
    'Vehicle, people and handling tools are planned around the cargo profile - not just the delivery address.': {
      vi: 'Xe, người và dụng cụ được bố trí theo đặc điểm hàng hóa, không chỉ theo địa chỉ giao.',
      zh: '车辆、人员和工具根据货物特点来安排，而不只看送货地址。'
    },

    // ---- 11 Customs --------------------------------------------------------
    '10 · Customs clearance': { vi: '10 · Thủ tục hải quan', zh: '10 · 报关清关' },
    'Customs clearance.': { vi: 'Thủ tục hải quan.', zh: '报关清关，' },
    'No hidden fees.': { vi: 'Không phí ẩn.', zh: '无隐藏收费。' },
    'Deep local expertise for industrial and technically complex shipments, with clear cost visibility before and during the clearance process.': {
      vi: 'Am hiểu sâu thủ tục trong nước cho hàng công nghiệp và hàng kỹ thuật phức tạp, chi phí minh bạch trước và trong quá trình thông quan.',
      zh: '深耕本地清关业务，擅长工业品及技术复杂货物，清关前与清关过程中费用清晰透明。'
    },
    'H.S. code & duty': { vi: 'Mã HS & thuế', zh: 'HS 编码与关税' },
    'Code verification, duty check and tax-related consultation.': {
      vi: 'Kiểm tra mã HS, thuế suất và tư vấn các vấn đề về thuế.',
      zh: '编码核实、税率核查及税务相关咨询。'
    },
    'C/O & certificates': { vi: 'C/O & giấy chứng nhận', zh: '原产地证与各类证书' },
    'C/O forms A, E, D, AANZ plus phytosanitary and veterinary certificates.': {
      vi: 'C/O form A, E, D, AANZ cùng giấy chứng nhận kiểm dịch thực vật và thú y.',
      zh: 'A、E、D、AANZ 格式原产地证，以及植物检疫证书和兽医卫生证书。'
    },
    'Inspection handling': { vi: 'Xử lý kiểm tra', zh: '查验处理' },
    'Quarantine, fumigation, plant and commodity inspection coordination.': {
      vi: 'Điều phối kiểm dịch, hun trùng, kiểm dịch thực vật và kiểm tra chất lượng hàng hóa.',
      zh: '协调检疫、熏蒸、植物检验及商品检验。'
    },
    'Complex cargo': { vi: 'Hàng phức tạp', zh: '复杂货物' },
    'Machinery, industrial goods, chemicals, raw materials and special projects.': {
      vi: 'Máy móc, hàng công nghiệp, hóa chất, nguyên liệu và dự án đặc biệt.',
      zh: '机械设备、工业品、化工品、原材料及特殊项目。'
    },
    'We disclose expected customs clearance costs clearly, with no surprise charges added later.': {
      vi: 'Chúng tôi công bố rõ chi phí thông quan dự kiến, không phát sinh phí bất ngờ về sau.',
      zh: '我们事先清楚告知预计清关费用，事后不会额外加收意外费用。'
    },
    'Chemical goods': { vi: 'Hàng hóa chất', zh: '化工品' },
    'Machinery & equipment': { vi: 'Máy móc & thiết bị', zh: '机械与设备' },
    'Construction & industrial goods': { vi: 'Hàng xây dựng & công nghiệp', zh: '建材与工业品' },

    // ---- 12 Contact --------------------------------------------------------
    'Start with four details': { vi: 'Bắt đầu với bốn thông tin', zh: '只需四项信息' },
    'Your next shipment': { vi: 'Lô hàng tiếp theo của bạn', zh: '您的下一票货物，' },
    'starts here.': { vi: 'bắt đầu từ đây.', zh: '从这里开始。' },
    'Share the essentials and our team will quickly build a practical route, timeline and transparent quotation for your cargo.': {
      vi: 'Chia sẻ thông tin cơ bản, đội ngũ chúng tôi sẽ nhanh chóng xây dựng lộ trình, tiến độ và báo giá minh bạch cho lô hàng của bạn.',
      zh: '提供基本信息，我们的团队将迅速为您的货物制定实用路线、时间安排及透明报价。'
    },
    'Origin': { vi: 'Điểm đi', zh: '起运地' },
    'Destination': { vi: 'Điểm đến', zh: '目的地' },
    'Cargo details': { vi: 'Thông tin hàng hóa', zh: '货物详情' },
    'Required timeline': { vi: 'Thời gian yêu cầu', zh: '时效要求' },
    'Responsive support from a real operations team': {
      vi: 'Hỗ trợ nhanh từ đội ngũ vận hành thực thụ',
      zh: '由真正的操作团队快速响应'
    },
    'Visit pio-logistics.vn': { vi: 'Truy cập pio-logistics.vn', zh: '访问 pio-logistics.vn' },
    'Managing Director': { vi: 'Giám đốc điều hành', zh: '总经理' },
    'Oversea Manager': { vi: 'Trưởng phòng hải ngoại', zh: '海外经理' },
    'Logistics Department': { vi: 'Phòng Logistics', zh: '物流部' },
    'Oversea Department': { vi: 'Phòng hải ngoại', zh: '海外部' },

    // ---- Map place names: VI gets diacritics; ZH keeps the Latin name used
    //      on bookings and adds the Chinese facility type. ------------------
    'Song Than ICD': { vi: 'ICD Sóng Thần', zh: 'Song Than ICD' },
    'ICD Phuoc Long': { vi: 'ICD Phước Long', zh: 'Phuoc Long ICD' },
    'Thu Duc Depot': { vi: 'Depot Thủ Đức', zh: '守德堆场' },
    'Binh Duong Port': { vi: 'Cảng Bình Dương', zh: '平阳港' },
    'Dong Nai Port': { vi: 'Cảng Đồng Nai', zh: '同奈港' },
    'Cat Lai Terminal': { vi: 'Cảng Cát Lái', zh: '吉莱码头' },
    'Nhon Trach Depot': { vi: 'Depot Nhơn Trạch', zh: '仁泽堆场' },
    'Chua Ve Terminal': { vi: 'Cảng Chùa Vẽ', zh: 'Chua Ve 码头' },
    'Tan Vu Area': { vi: 'Khu vực Tân Vũ', zh: 'Tan Vu 区域' },
    'Dinh Vu Port': { vi: 'Cảng Đình Vũ', zh: 'Dinh Vu 港' },
    'VIP Green Port': { vi: 'Cảng VIP Green', zh: 'VIP Green 港' },
    'Nam Dinh Vu Port': { vi: 'Cảng Nam Đình Vũ', zh: 'Nam Dinh Vu 港' },
    'Lach Huyen / HICT': { vi: 'Lạch Huyện / HICT', zh: 'Lach Huyen / HICT' },

    // ---- Cat Lai cluster map (built by JS) ---------------------------------
    'Binh Duong industrial area': { vi: 'Khu công nghiệp Bình Dương', zh: '平阳工业区' },
    'Best fit for Binh Duong factories that need ICD handling before moving cargo to seaport.': {
      vi: 'Phù hợp nhất cho nhà máy Bình Dương cần làm hàng tại ICD trước khi đưa ra cảng biển.',
      zh: '最适合需要先在 ICD 操作、再运往海港的平阳工厂。'
    },
    'Useful for EXW/FCA jobs where empty pickup, warehouse handover and truck timing must be checked early.': {
      vi: 'Hữu ích cho lô EXW/FCA cần kiểm tra sớm điểm lấy vỏ, bàn giao kho và giờ xe.',
      zh: '适用于需提前确认提空、仓库交接及用车时间的 EXW/FCA 业务。'
    },
    'PIO confirms carrier depot instruction and cut-off before dispatch to avoid wrong empty release or extra lift.': {
      vi: 'PIO xác nhận chỉ định depot và cut-off của hãng tàu trước khi điều xe, tránh lấy sai vỏ hoặc phát sinh phí nâng hạ.',
      zh: 'PIO 在派车前确认船公司堆场指示和截关时间，避免提错空箱或产生额外吊装费。'
    },
    'ICD / depot support': { vi: 'Hỗ trợ ICD / depot', zh: 'ICD / 堆场支持' },
    'Inner HCMC / Thu Duc ICD option with container, bulk and project-cargo handling background.': {
      vi: 'Lựa chọn ICD nội thành TP.HCM / Thủ Đức, có kinh nghiệm xử lý container, hàng rời và hàng dự án.',
      zh: '胡志明市内 / 守德 ICD 选项，具备集装箱、散货及项目货物操作经验。'
    },
    'Good backup point when Cat Lai timing is tight and cargo needs depot-side coordination.': {
      vi: 'Điểm dự phòng tốt khi thời gian tại Cát Lái gấp và hàng cần điều phối tại depot.',
      zh: '当吉莱港时间紧张、货物需在堆场协调时，是不错的备选点。'
    },
    'PIO checks booking remark, carrier acceptance and depot gate rule before sending truck or labor.': {
      vi: 'PIO kiểm tra ghi chú booking, chấp thuận của hãng tàu và quy định cổng depot trước khi điều xe hoặc nhân công.',
      zh: 'PIO 在派车或派工前核查订舱备注、船公司接收情况及堆场进门规定。'
    },
    'Local depot options': { vi: 'Lựa chọn depot địa phương', zh: '本地堆场选择' },
    'Practical depot zone for Thu Duc and eastern HCMC cargo moving between factory, ICD and Cat Lai.': {
      vi: 'Khu depot thuận tiện cho hàng Thủ Đức và phía đông TP.HCM di chuyển giữa nhà máy, ICD và Cát Lái.',
      zh: '适合守德及胡志明市东部货物在工厂、ICD 与吉莱港之间流转的堆场区域。'
    },
    'Useful when clients need flexible empty pickup, stuffing support or consolidation before port cut-off.': {
      vi: 'Hữu ích khi khách cần linh hoạt lấy vỏ rỗng, hỗ trợ đóng hàng hoặc gom hàng trước cut-off.',
      zh: '适用于客户在截关前需要灵活提空、装箱支持或集运的情况。'
    },
    'PIO aligns truck, manpower and loading equipment so the depot plan does not delay vessel closing.': {
      vi: 'PIO đồng bộ xe, nhân lực và thiết bị xếp hàng để kế hoạch depot không làm trễ giờ cắt máng.',
      zh: 'PIO 统筹车辆、人力和装货设备，确保堆场计划不耽误截关。'
    },
    'North-east river gateway': { vi: 'Cửa ngõ đường sông Đông Bắc', zh: '东北部内河门户' },
    'Serves Binh Duong industrial cargo and north-east HCMC flows through the river-port network.': {
      vi: 'Phục vụ hàng công nghiệp Bình Dương và luồng hàng Đông Bắc TP.HCM qua mạng lưới cảng sông.',
      zh: '通过内河港口网络服务平阳工业货物及胡志明市东北部货流。'
    },
    'Good option to compare when factory location makes direct Cat Lai trucking less efficient.': {
      vi: 'Phương án nên so sánh khi vị trí nhà máy khiến chạy xe thẳng về Cát Lái kém hiệu quả.',
      zh: '当工厂位置导致直接拖运至吉莱港效率不高时，值得比较的方案。'
    },
    'PIO checks barge/truck feasibility, depot acceptance and container condition before final routing.': {
      vi: 'PIO kiểm tra tính khả thi sà lan/xe, chấp thuận của depot và tình trạng container trước khi chốt lộ trình.',
      zh: 'PIO 在确定最终路线前核查驳船 / 卡车可行性、堆场接收情况及箱况。'
    },
    'Dong Nai / Bien Hoa side': { vi: 'Khu vực Đồng Nai / Biên Hòa', zh: '同奈 / 边和一带' },
    'Convenient for Bien Hoa and Dong Nai industrial zones where local handling can reduce truck distance.': {
      vi: 'Thuận tiện cho KCN Biên Hòa và Đồng Nai, làm hàng tại chỗ giúp rút ngắn quãng đường xe.',
      zh: '方便边和及同奈工业区，就近操作可缩短拖车距离。'
    },
    'Useful for comparing depot return and export stuffing options before committing to Cat Lai flow.': {
      vi: 'Hữu ích để so sánh phương án trả vỏ và đóng hàng xuất trước khi chốt đi qua Cát Lái.',
      zh: '在确定走吉莱港之前，可用于比较还箱及出口装箱方案。'
    },
    'PIO verifies carrier service point, depot availability and final routing so cost is clear before pickup.': {
      vi: 'PIO xác minh điểm dịch vụ hãng tàu, tình trạng depot và lộ trình cuối để chi phí rõ ràng trước khi lấy hàng.',
      zh: 'PIO 核实船公司服务点、堆场情况和最终路线，确保提货前费用清晰。'
    },
    'Main HCMC port gateway': { vi: 'Cửa ngõ cảng chính TP.HCM', zh: '胡志明市主要港口门户' },
    'PIO’s strongest HCMC gateway, with our largest cargo volume handled here and strong import focus.': {
      vi: 'Cửa ngõ mạnh nhất của PIO tại TP.HCM, nơi xử lý sản lượng lớn nhất, đặc biệt mạnh về hàng nhập.',
      zh: 'PIO 在胡志明市最核心的门户，承运量最大，进口业务尤为突出。'
    },
    'For import jobs, we coordinate warehouse 2/3 and export or delivery flow through warehouse 1/5 as required.': {
      vi: 'Với hàng nhập, chúng tôi điều phối qua kho 2/3; hàng xuất hoặc giao hàng qua kho 1/5 tùy yêu cầu.',
      zh: '进口业务经 2 / 3 号仓库协调，出口或派送按需经 1 / 5 号仓库操作。'
    },
    'Strong lanes from Cat Lai include India, Australia, Americas and Latin America, with depot pickup checked by carrier.': {
      vi: 'Tuyến mạnh từ Cát Lái gồm Ấn Độ, Úc, châu Mỹ và Mỹ Latinh, điểm lấy vỏ được kiểm tra theo từng hãng tàu.',
      zh: '吉莱港优势航线包括印度、澳大利亚、美洲及拉丁美洲，提箱堆场按船公司逐一核实。'
    },
    'Dong Nai depot support': { vi: 'Hỗ trợ depot Đồng Nai', zh: '同奈堆场支持' },
    'Supports Nhon Trach and Dong Nai factories when local depot handling is more practical than city routing.': {
      vi: 'Hỗ trợ nhà máy Nhơn Trạch và Đồng Nai khi làm hàng tại depot địa phương thuận tiện hơn đi qua nội thành.',
      zh: '当就近堆场操作比穿城运输更实际时，为仁泽及同奈工厂提供支持。'
    },
    'Good for factory loading, depot stuffing and special cargo coordination outside central HCMC traffic.': {
      vi: 'Phù hợp đóng hàng tại nhà máy, tại depot và điều phối hàng đặc biệt, tránh giao thông nội đô TP.HCM.',
      zh: '适合工厂装货、堆场装箱及特殊货物协调，避开胡志明市中心交通。'
    },
    'PIO checks access road, truck type, crane or manpower needs before dispatching the unloading plan.': {
      vi: 'PIO kiểm tra đường vào, loại xe, nhu cầu cẩu hoặc nhân lực trước khi triển khai phương án dỡ hàng.',
      zh: 'PIO 在执行卸货方案前核查进场道路、车型以及吊车或人力需求。'
    },

    // ---- Hai Phong cluster map (built by JS) -------------------------------
    'Historic Cam River port': { vi: 'Cảng lịch sử trên sông Cấm', zh: '禁江沿岸老港区' },
    'Northern gateway for import/export cargo with established container and general cargo operations.': {
      vi: 'Cửa ngõ phía Bắc cho hàng xuất nhập khẩu, khai thác container và hàng tổng hợp lâu năm.',
      zh: '北部进出口门户，集装箱与件杂货作业成熟。'
    },
    'Useful for Hai Phong city cargo and short-haul inland delivery where terminal choice affects truck timing.': {
      vi: 'Phù hợp hàng nội thành Hải Phòng và giao nội địa cự ly ngắn, nơi việc chọn bến ảnh hưởng giờ xe.',
      zh: '适用于海防市区货物及短途内陆派送，码头选择会影响用车时间。'
    },
    'PIO checks release document, terminal instruction and gate plan before pickup to reduce waiting cost.': {
      vi: 'PIO kiểm tra lệnh giao hàng, chỉ định bến và kế hoạch vào cổng trước khi lấy hàng để giảm chi phí chờ.',
      zh: 'PIO 在提货前核查放货单证、码头指示和进门计划，以减少等待费用。'
    },
    'Container terminal area': { vi: 'Khu bến container', zh: '集装箱码头区' },
    'Container terminal area close to traditional Hai Phong port flow and city-side trucking routes.': {
      vi: 'Khu bến container gần luồng cảng Hải Phòng truyền thống và các tuyến xe nội thành.',
      zh: '集装箱码头区，靠近海防传统港口货流及市区拖车路线。'
    },
    'Good for standard container export/import when document timing and CY cut-off must be controlled.': {
      vi: 'Phù hợp hàng container xuất nhập tiêu chuẩn khi cần kiểm soát thời gian chứng từ và CY cut-off.',
      zh: '适合需严格控制单证时间及截港时间的标准集装箱进出口。'
    },
    'PIO confirms carrier terminal, lifting rule and truck appointment before sending the vehicle.': {
      vi: 'PIO xác nhận bến của hãng tàu, quy định nâng hạ và lịch hẹn xe trước khi điều xe.',
      zh: 'PIO 在派车前确认船公司码头、吊装规定及预约时间。'
    },
    'Bridge / depot access': { vi: 'Lối vào cầu / depot', zh: '桥梁 / 堆场通道' },
    'Key access area linking Hai Phong city-side cargo to Dinh Vu and Lach Huyen port flows.': {
      vi: 'Khu vực kết nối quan trọng giữa hàng nội thành Hải Phòng với luồng cảng Đình Vũ và Lạch Huyện.',
      zh: '连接海防市区货物与 Dinh Vu、Lach Huyen 港口货流的关键通道。'
    },
    'Useful when empty pickup or container return point changes by shipping line.': {
      vi: 'Hữu ích khi điểm lấy vỏ hoặc trả container thay đổi theo hãng tàu.',
      zh: '适用于提空点或还箱点因船公司而变化的情况。'
    },
    'PIO compares Tan Vu, Dinh Vu and Lach Huyen routing before confirming the practical truck plan.': {
      vi: 'PIO so sánh lộ trình Tân Vũ, Đình Vũ và Lạch Huyện trước khi chốt phương án xe thực tế.',
      zh: 'PIO 比较 Tan Vu、Dinh Vu 与 Lach Huyen 路线后，再确定实际用车方案。'
    },
    'Dinh Vu industrial zone': { vi: 'Khu công nghiệp Đình Vũ', zh: 'Dinh Vu 工业区' },
    'Industrial-zone port cluster with handling, warehousing and multimodal forwarding service background.': {
      vi: 'Cụm cảng trong khu công nghiệp, có kinh nghiệm xếp dỡ, kho bãi và giao nhận đa phương thức.',
      zh: '工业区港口群，具备装卸、仓储及多式联运代理服务经验。'
    },
    'Good for export cargo from Dinh Vu / Hai An factories where shorter drayage protects cut-off time.': {
      vi: 'Phù hợp hàng xuất từ nhà máy Đình Vũ / Hải An, quãng kéo ngắn giúp đảm bảo cut-off.',
      zh: '适合 Dinh Vu / 海安工厂的出口货物，短驳距离有助于赶上截关。'
    },
    'PIO checks terminal acceptance, container return instruction and carrier closing time before dispatch.': {
      vi: 'PIO kiểm tra chấp thuận của bến, chỉ định trả vỏ và giờ cắt máng của hãng tàu trước khi điều xe.',
      zh: 'PIO 在派车前核查码头接收情况、还箱指示及船公司截关时间。'
    },
    'Carrier terminal option': { vi: 'Lựa chọn bến theo hãng tàu', zh: '船公司码头选项' },
    'Carrier terminal option in Dinh Vu - Cat Hai economic zone with port yard and stevedoring services.': {
      vi: 'Bến của hãng tàu trong khu kinh tế Đình Vũ - Cát Hải, có bãi cảng và dịch vụ xếp dỡ.',
      zh: '位于 Dinh Vu - 吉海经济区的船公司码头，提供港区堆场及装卸服务。'
    },
    'Important to verify because some bookings call VIP Green while others use nearby terminals.': {
      vi: 'Cần xác minh vì một số booking ghé VIP Green, số khác dùng các bến lân cận.',
      zh: '需要核实：部分订舱挂靠 VIP Green，另一些则使用附近码头。'
    },
    'PIO checks the exact VNHPH terminal code, gate rule and container availability before pickup.': {
      vi: 'PIO kiểm tra chính xác mã bến VNHPH, quy định cổng và tình trạng container trước khi lấy hàng.',
      zh: 'PIO 在提货前核实准确的 VNHPH 码头代码、进门规定及箱源情况。'
    },
    'Strong northern export gateway': { vi: 'Cửa ngõ xuất khẩu mạnh phía Bắc', zh: '北部出口优势门户' },
    'Strategic northern gateway in Nam Dinh Vu industrial zone and Gemadept port-logistics ecosystem.': {
      vi: 'Cửa ngõ chiến lược phía Bắc trong KCN Nam Đình Vũ và hệ sinh thái cảng - logistics Gemadept.',
      zh: '位于 Nam Dinh Vu 工业区及 Gemadept 港口物流体系内的北部战略门户。'
    },
    'Strong for industrial exports and modern river-port flow with expanding berth and yard capacity.': {
      vi: 'Mạnh về hàng công nghiệp xuất khẩu và luồng cảng sông hiện đại, công suất cầu bến và bãi đang mở rộng.',
      zh: '工业品出口及现代内河港口货流优势明显，泊位和堆场能力持续扩大。'
    },
    'PIO checks vessel cut-off, terminal gate, empty release point and depot instruction before final plan.': {
      vi: 'PIO kiểm tra cut-off tàu, cổng bến, điểm cấp vỏ và chỉ định depot trước khi chốt phương án.',
      zh: 'PIO 在确定最终方案前核查船舶截关、码头闸口、放空点及堆场指示。'
    },
    'Deep-water terminal connection': { vi: 'Kết nối bến nước sâu', zh: '深水码头衔接' },
    'Deep-water terminal connection for mother-vessel services and long-haul lanes from Northern Vietnam.': {
      vi: 'Kết nối bến nước sâu cho tàu mẹ và các tuyến xa từ miền Bắc Việt Nam.',
      zh: '为越南北部的母船服务及远洋航线提供深水码头衔接。'
    },
    'Best when carrier schedule requires Lach Huyen instead of inner Hai Phong terminals.': {
      vi: 'Phù hợp nhất khi lịch tàu yêu cầu Lạch Huyện thay vì các bến nội thành Hải Phòng.',
      zh: '当船期要求走 Lach Huyen 而非海防内港码头时最为合适。'
    },
    'PIO plans longer drayage, bridge route and gate timing early to protect vessel cut-off.': {
      vi: 'PIO lên kế hoạch sớm cho quãng kéo dài, tuyến qua cầu và giờ vào cổng để đảm bảo cut-off tàu.',
      zh: 'PIO 提前规划较长的短驳、过桥路线及进门时间，确保赶上截关。'
    },

    // ---- Attributes (aria-label / title) -----------------------------------
    'Open full screen': { vi: 'Mở toàn màn hình', zh: '打开全屏' },
    'Exit full screen': { vi: 'Thoát toàn màn hình', zh: '退出全屏' },
    'Full screen': { vi: 'Toàn màn hình', zh: '全屏' },
    'Toggle sitemap dashboard': { vi: 'Mở/đóng danh mục trang', zh: '打开 / 关闭页面目录' },
    'Previous slide': { vi: 'Trang trước', zh: '上一页' },
    'Next slide': { vi: 'Trang sau', zh: '下一页' },
    'Previous image': { vi: 'Ảnh trước', zh: '上一张' },
    'Next image': { vi: 'Ảnh sau', zh: '下一张' },
    'Close expanded image': { vi: 'Đóng ảnh phóng to', zh: '关闭大图' },
    'Change language': { vi: 'Đổi ngôn ngữ', zh: '切换语言' }
  };

  // Templated strings built by the page script.
  var PATTERNS = [
    { re: /^Go to slide (\d+): (.+)$/, en: 'Go to slide $1: $2', vi: 'Đến trang $1: $2', zh: '前往第 $1 页：$2' },
    { re: /^Zoom to (.+)$/, en: 'Zoom to $1', vi: 'Phóng to $1', zh: '放大 $1' },
    { re: /^PIO Logistics \| (.+)$/, en: 'PIO Logistics | $1', vi: 'PIO Logistics | $1', zh: 'PIO Logistics | $1' }
  ];

  // Reverse index (any translation -> English key). The page script builds
  // some strings from already-translated attributes (e.g. the tab title from
  // data-title), so we map those back to English before translating again.
  var REV = {};
  Object.keys(T).forEach(function (k) {
    // First entry wins, so slide titles beat map labels sharing a translation.
    if (T[k].vi && !REV[T[k].vi]) REV[T[k].vi] = k;
    if (T[k].zh && !REV[T[k].zh]) REV[T[k].zh] = k;
  });
  var toEnglish = function (s) { return REV[s] || s; };

  var LANGS = {
    en: { label: 'EN', name: 'English', html: 'en' },
    vi: { label: 'VI', name: 'Tiếng Việt', html: 'vi' },
    zh: { label: '中文', name: '简体中文', html: 'zh-Hans' }
  };
  var STORAGE_KEY = 'pio-lang';
  var ATTRS = ['aria-label', 'title', 'data-title', 'alt'];

  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  // Returns the text in `lang`, or null when the source should be left as is.
  var lookup = function (src, lang) {
    var raw = norm(src);
    if (!raw) return null;
    var key = toEnglish(raw);
    if (lang === 'en') {
      if (key !== raw) return key;
    } else {
      var hit = T[key];
      if (hit && hit[lang]) return hit[lang];
    }
    for (var i = 0; i < PATTERNS.length; i++) {
      var p = PATTERNS[i];
      var m = raw.match(p.re);
      if (!m) continue;
      // Fill $1, $2 … with the captured parts, translating them when we can.
      return p[lang].replace(/\$(\d)/g, function (_, n) {
        var part = toEnglish(m[+n] || '');
        return lang === 'en' ? part : ((T[part] && T[part][lang]) || part);
      });
    }
    return null;
  };

  var lang = 'en';
  var textOrig = new WeakMap();  // text node -> English source
  var textSet = new WeakMap();   // text node -> value we last wrote
  var attrOrig = new WeakMap();  // element -> { attr: { orig, set } }

  function translateText(node) {
    var current = node.nodeValue;
    var orig = textOrig.get(node);
    if (orig === undefined || current !== textSet.get(node)) {
      orig = current;           // first visit, or the page changed the text itself
      textOrig.set(node, orig);
    }
    var t = lookup(orig, lang);
    var next = orig;
    if (t !== null) {
      var lead = orig.match(/^\s*/)[0];
      var trail = orig.match(/\s*$/)[0];
      next = lead + t + trail;
    }
    textSet.set(node, next);
    if (current !== next) node.nodeValue = next;
  }

  function translateAttrs(el) {
    var rec = attrOrig.get(el);
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var current = el.getAttribute(a);
      if (!rec) { rec = {}; attrOrig.set(el, rec); }
      var r = rec[a];
      if (!r || current !== r.set) { r = rec[a] = { orig: current }; }
      var t = lookup(r.orig, lang);
      r.set = t === null ? r.orig : t;
      if (current !== r.set) el.setAttribute(a, r.set);
    }
  }

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1 };
  function walk(root) {
    if (root.nodeType === 3) { translateText(root); return; }
    if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
    if (root.hasAttribute('data-i18n-skip')) return;
    translateAttrs(root);
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeType === 1) {
          if (SKIP[n.nodeName] || n.hasAttribute('data-i18n-skip')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var n;
    while ((n = tw.nextNode())) {
      if (n.nodeType === 3) translateText(n); else translateAttrs(n);
    }
  }

  var titleOrig = document.title;
  var titleSet = document.title;
  function translateTitle() {
    if (document.title !== titleSet) titleOrig = document.title;
    var t = lookup(titleOrig, lang);
    titleSet = t === null ? titleOrig : t;
    if (document.title !== titleSet) document.title = titleSet;
  }

  var observer = new MutationObserver(function (records) {
    observer.disconnect();
    for (var i = 0; i < records.length; i++) {
      var r = records[i];
      if (r.type === 'childList') {
        for (var j = 0; j < r.addedNodes.length; j++) walk(r.addedNodes[j]);
      } else if (r.type === 'characterData') {
        translateText(r.target);
      } else if (r.type === 'attributes') {
        translateAttrs(r.target);
      }
    }
    translateTitle();
    observe();
  });
  function observe() {
    observer.observe(document.body, {
      subtree: true, childList: true, characterData: true,
      attributes: true, attributeFilter: ATTRS
    });
    observer.observe(document.head.querySelector('title') || document.head, {
      subtree: true, childList: true, characterData: true
    });
  }

  function applyLanguage(next, persist) {
    if (!LANGS[next]) next = 'en';
    lang = next;
    observer.disconnect();
    document.documentElement.lang = LANGS[next].html;
    document.documentElement.setAttribute('data-lang', next);
    walk(document.body);
    translateTitle();
    observe();
    updateSwitcher();
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* storage blocked */ }
      try {
        var url = new URL(window.location.href);
        if (next === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', next);
        history.replaceState(history.state, '', url);
      } catch (e) { /* ignore */ }
    }
    // Text length changed: let the slide auto-fit re-measure.
    window.dispatchEvent(new Event('resize'));
  }

  // ---- Switcher UI ---------------------------------------------------------
  var button, menu;
  function updateSwitcher() {
    if (!button) return;
    button.querySelector('.lang-switch__current').textContent = LANGS[lang].label;
    menu.querySelectorAll('[data-lang]').forEach(function (item) {
      var on = item.getAttribute('data-lang') === lang;
      item.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }
  function closeMenu() {
    if (!menu) return;
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  }
  function buildSwitcher() {
    var wrap = document.getElementById('langSwitch');
    if (!wrap) return;
    button = wrap.querySelector('.lang-switch__button');
    menu = wrap.querySelector('.lang-switch__menu');
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.hidden;
      menu.hidden = !open;
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      var item = e.target.closest('[data-lang]');
      if (!item) return;
      e.stopPropagation();
      applyLanguage(item.getAttribute('data-lang'), true);
      closeMenu();
    });
    document.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    // Keep arrow-key / swipe navigation from firing while the menu is used.
    ['keydown', 'pointerdown', 'touchstart'].forEach(function (type) {
      wrap.addEventListener(type, function (e) { e.stopPropagation(); }, { passive: true });
    });
  }

  function initialLanguage() {
    try {
      var q = new URL(window.location.href).searchParams.get('lang');
      if (q && LANGS[q]) return q;
    } catch (e) { /* ignore */ }
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGS[saved]) return saved;
    } catch (e) { /* ignore */ }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    if (/^vi/i.test(nav)) return 'vi';
    if (/^zh/i.test(nav)) return 'zh';
    return 'en';
  }

  function start() {
    buildSwitcher();
    applyLanguage(initialLanguage(), false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.PIOi18n = { set: function (l) { applyLanguage(l, true); }, get: function () { return lang; }, dict: T };
})();
