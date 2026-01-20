import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonCheckbox,
  AlertController
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { trash, cart, addCircle } from 'ionicons/icons';

// Yêu cầu 3: Interface Product để đối tượng hóa dữ liệu
export interface Product {
  name: string;
  isBought: boolean;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonButtons,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonCheckbox
  ]
})
export class HomePage {
  // Yêu cầu 3: Danh sách mua sắm dạng đối tượng Product
  items: Product[] = [
    { name: "Sữa tươi", isBought: false },
    { name: "Bánh mì sandwich", isBought: false }
  ];

  // Biến nhận dữ liệu từ ô nhập
  newItem: string = "";

  // Inject AlertController vào constructor
  constructor(private alertController: AlertController) {
    // Yêu cầu 4: Đăng ký các icons
    addIcons({ trash, cart, addCircle });
  }

  // Hàm xóa item theo index
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  // Hàm hiển thị Alert thông báo lỗi
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Hàm thêm item với validation
  addItem() {
    if (this.newItem && this.newItem.trim() !== "") {
      // Yêu cầu 3: Thêm đối tượng Product thay vì chuỗi
      this.items.push({ name: this.newItem.trim(), isBought: false });
      this.newItem = "";
    } else {
      // Hiển thị Alert khi ô nhập trống
      this.showAlert('Lỗi', 'Vui lòng nhập tên sản phẩm!');
    }
  }
}
