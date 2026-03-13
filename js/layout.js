(function () {
  "use strict";

  function isActive(page, target) {
    return page === target ? " active" : "";
  }

  function isAdmissionActive(page) {
    return [
      "detail",
      "feature",
      "team",
      "testimonial",
      "tuyensinh-daihoctx",
      "tuyensinh-vhvl",
      "tuyensinh-dhlt",
    ].includes(page)
      ? " active"
      : "";
  }

  function buildHeader(page) {
    return `
    <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center text-white">
                    <small><i class="fa fa-phone-alt mr-2"></i>0972 091 290</small>
                    <small class="px-3">|</small>
                    <small><i class="fa fa-envelope mr-2"></i>Lylt@utt.edu.vn</small>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href="https://www.facebook.com/daihoclienthongvb2vhvl/" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h2 class="m-0 text-uppercase text-primary"><img class="site-logo-icon mr-3" src="../../img/main/logo-utt-border.png" alt="UTT">Viện Đào tạo liên tục và Từ xa</h2>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav mx-auto py-0">
                    <a href="../common/index.html" class="nav-item nav-link${isActive(
                      page,
                      "home",
                    )}">Trang chủ</a>
                    <a href="../common/about.html" class="nav-item nav-link${isActive(
                      page,
                      "about",
                    )}">Giới thiệu</a>
                    <a href="../common/new-event.html" class="nav-item nav-link${isActive(
                      page,
                      "new-event",
                    )}">Tin tức - sự kiện</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle${isAdmissionActive(
                          page,
                        )}" data-toggle="dropdown">Tuyển sinh</a>
                        <div class="dropdown-menu m-0">
                            <a href="../status/tuyensinh-daihoctx.html" class="dropdown-item${isActive(
                              page,
                              "tuyensinh-daihoctx",
                            )}">Đào tạo từ xa</a>
                            <a href="../status/tuyensinh-vhvl.html" class="dropdown-item${isActive(
                              page,
                              "tuyensinh-vhvl",
                            )}">Vừa học vừa làm</a>
                            <a href="../status/tuyensinh-dhlt.html" class="dropdown-item${isActive(
                              page,
                              "tuyensinh-dhlt",
                            )}">Liên thông</a>
                            <a href="" class="dropdown-item${isActive(
                              page,
                              "testimonial",
                            )}">Văn bằng 2</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Chuyên ngành đào tạo</a>
                        <div class="dropdown-menu m-0">
                            <a href="../status/ctdt-dtcd.html" class="dropdown-item${isActive(
                              page,
                              "ctdt-dtcd",
                            )}">Công nghệ kỹ thuật xây dựng Cầu - Đường bộ</a>
                            <a href="../status/ctdt-dtcs.html" class="dropdown-item${isActive(
                              page,
                              "ctdt-dtcs",
                            )}">Công nghệ kỹ thuật xây dựng Cầu – Đường sắt</a>
                            <a href="../status/ctdt-dtdd.html" class="dropdown-item${isActive(
                              page,
                              "ctdt-dtdd",
                            )}">Công nghệ kỹ thuật Công trình Xây dựng Dân dụng và Công nghiệp</a>
                            <a href="../status/ctdt-dtec.html" class="dropdown-item${isActive(page, "ctdt-dtec")}">Thương mại điện tử</a>
                            <a href="../status/ctdt-dtkt.html" class="dropdown-item${isActive(
                              page,
                              "ctdt-dtkt",
                            )}">Kế toán doanh nghiệp</a>
                            <a href="../status/ctdt-dtlg.html" class="dropdown-item${isActive(
                              page,
                              "ctdt-dtlg",
                            )}">Logistics và Quản lý chuỗi cung ứng</a>
                            <a href="../status/ctdt-dtot.html" class="dropdown-item${isActive(page, "ctdt-dtot")}">Công nghệ kỹ thuật ô tô</a>
                            <a href="../status/ctdt-dtqt.html" class="dropdown-item${isActive(page, "ctdt-dtqt")}">Quản trị doanh nghiệp</a>
                            <a href="../status/ctdt-dtqx.html" class="dropdown-item${isActive(page, "ctdt-dtqx")}">Quản lý xây dựng</a>
                            <a href="../status/ctdt-dttq.html" class="dropdown-item${isActive(page, "ctdt-dttq")}">Thanh tra và Quản lý công trình giao thông</a>
                            <a href="../status/ctdt-dttt.html" class="dropdown-item${isActive(page, "ctdt-dttt")}">Công nghệ thông tin</a>
                            <a href="../status/ctdt-dtvs.html" class="dropdown-item${isActive(page, "ctdt-dtvs")}">Quản lý và Điều hành vận tải đường sắt</a>
                        </div>
                    </div>
                    <a href="https://www.facebook.com/daihoclienthongvb2vhvl/" class="nav-item nav-link${isActive(
                      page,
                      "contact",
                    )}">Liên hệ</a>
                </div>
            </div>
        </nav>
    </div>`;
  }

  function buildHero(title) {
    return `
    <div class="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style="margin-bottom: 90px;">
        <div class="container text-center py-5">
            <h1 class="text-white display-1">${title}</h1>
            <div class="d-inline-flex text-white mb-5">
                <p class="m-0 text-uppercase"><a class="text-white" href="../common/index.html">Trang chủ</a></p>
                <i class="fa fa-angle-double-right pt-1 px-3"></i>
                <p class="m-0 text-uppercase">${title}</p>
            </div>
            <div class="mx-auto mb-5" style="width: 100%; max-width: 600px;">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Courses</button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Courses 1</a>
                            <a class="dropdown-item" href="#">Courses 2</a>
                            <a class="dropdown-item" href="#">Courses 3</a>
                        </div>
                    </div>
                    <input type="text" class="form-control border-light" style="padding: 30px 25px;" placeholder="Keyword">
                    <div class="input-group-append">
                        <button class="btn btn-secondary px-4 px-lg-5">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  }

  var siteFooter = `
    <div class="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style="margin-top: 90px;">
        <div class="container mt-5 pt-5">
            <div class="row">
                <div class="col-md-6 mb-5">
                    <a href="index.html" class="navbar-brand">
                        <h1 class="mt-n2 text-uppercase text-white"><img class="site-logo-icon mr-3" src="../../img/main/logo-utt-border.png" alt="UTT">Viện Đào tạo liên tục và Từ xa</h1>
                    </a>
                    <!-- <p class="m-0">Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores. Justo stet diam ipsum lorem vero clita diam</p> -->
                </div>
                <!--<div class="col-md-6 mb-5">
                    <h3 class="text-white mb-4">Newsletter</h3>
                    <div class="w-100">
                        <div class="input-group">
                            <input type="text" class="form-control border-light" style="padding: 30px;" placeholder="Your Email Address">
                            <div class="input-group-append">
                                <button class="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="row">
                <div class="col-md-4 mb-5">
                    <h3 class="text-white mb-4">Địa chỉ</h3>
                    <p><i class="fa fa-map-marker-alt mr-2"></i>Trường Đại học Công nghệ Giao thông vận tải, số 54 Triều Khúc, phường Thanh Liệt, Hà Nội</p>
                    <p><i class="fa fa-phone-alt mr-2"></i>0972 091 290</p>
                    <p><i class="fa fa-envelope mr-2"></i>lylt@utt.edu.vn</p>
                    <div class="d-flex justify-content-start mt-4">
                        <a class="text-white mr-4" href="https://www.facebook.com/daihoclienthongvb2vhvl/"><i class="fab fa-2x fa-facebook-f"></i></a>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <h3 class="text-white mb-4">Our Courses</h3>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Web Design</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Apps Design</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Marketing</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Research</a>
                        <a class="text-white-50" href="#"><i class="fa fa-angle-right mr-2"></i>SEO</a>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <h3 class="text-white mb-4">Quick Links</h3>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Privacy Policy</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Terms & Condition</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Regular FAQs</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Help & Support</a>
                        <a class="text-white-50" href="#"><i class="fa fa-angle-right mr-2"></i>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  // <div class="container-fluid bg-dark text-white-50 border-top py-4" style="border-color: rgba(256, 256, 256, .1) !important;">
  //     <div class="container">
  //         <div class="row">
  //             <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
  //                 <p class="m-0">Copyright &copy; <a class="text-white" href="#">Viện Đào tạo liên tục và Từ xa</a>. All Rights Reserved.</p>
  //             </div>
  //             <div class="col-md-6 text-center text-md-right">
  //                 <p class="m-0">Designed by <a class="text-white" href="https://htmlcodex.com">HTML Codex</a> Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
  //             </div>
  //         </div>
  //     </div>
  // </div>;

  var page = document.body.dataset.page || "";
  var pageTitle = document.body.dataset.pageTitle || "";
  var siteHeader = document.getElementById("site-header");
  var pageHero = document.getElementById("page-hero");
  var siteFooterContainer = document.getElementById("site-footer");

  if (siteHeader) {
    siteHeader.innerHTML = buildHeader(page);
  }

  if (pageHero) {
    pageHero.innerHTML = buildHero(pageTitle);
  }

  if (siteFooterContainer) {
    siteFooterContainer.innerHTML = siteFooter;
  }
})();
