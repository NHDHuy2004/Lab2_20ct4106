# Bài Thực Hành 2: Shopping List Manager (Ionic + Angular)

## Mục tiêu

Xây dựng ứng dụng quản lý danh sách mua sắm sử dụng Ionic Framework và Angular Standalone Components.

## Hướng dẫn cài đặt & Làm bài

Dự án này đã được khởi tạo sẵn (tương ứng với Bước 1 trong tài liệu thực hành) để tránh lỗi cấu hình Git.

1.  **Clone repository** này về máy.
2.  Mở terminal tại thư mục dự án, chạy lệnh:
    ```bash
    ionic serve
    ```
3. Bắt đầu làm bài từ **Bước 2: Hiển thị danh sách** trong file hướng dẫn.
4.  Để chạy thử ứng dụng:
    ```bash
    ionic serve
    ```

## Yêu cầu chấm điểm

Hệ thống sẽ tự động chấm điểm khi bạn **Push** code lên GitHub.

### 1. Cấu trúc & Standalone (2 điểm)

* Giữ nguyên cấu trúc Standalone Component.
* Import đúng các UI component trong `imports: []`.

### 2. Hiển thị & Nhập liệu (2 điểm)

* Import `FormsModule`.
* Sử dụng `*ngFor` để hiển thị danh sách.
* Sử dụng `[(ngModel)]` cho ô nhập liệu.

### 3. Điều hướng (2 điểm)

* Tạo trang giới thiệu (`ionic generate page items/about`).
* Nút "About" ở trang chủ dùng `routerLink` để chuyển trang.

### 4. Logic Validation & Xóa (2 điểm)

* **Validate:** Hiện thông báo (Alert) khi bấm Thêm mà ô nhập bị rỗng.
* **Xóa:** Vuốt item sang trái (`ion-item-sliding`) để hiện nút xóa.

### 5. Nâng cao OOP (2 điểm)

* Nâng cấp mảng chuỗi thành mảng đối tượng (có thuộc tính `isBought`).
* Dùng `ion-checkbox` để đánh dấu đã mua.

## Cách nộp bài

1.  Commit code: `git commit -am "Hoan thanh bai tap"`
2.  Push lên Github: `git push origin main`
3.  Vào tab **Actions** trên GitHub repo để xem kết quả chấm điểm.
