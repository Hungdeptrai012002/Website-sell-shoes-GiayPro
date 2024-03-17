import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user_email: any;
  user_password: any;
  user_name: any;
  isLoggedIn: any;
  myResult: any = {
    user_name: '',
    user_password: '',
    user_email: '',
    user_phone:'',
    quyen:'admin'
  };
  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.user_email, this.user_password).subscribe(
      (response) => {
        // Xử lý kết quả đăng nhập ở đây
        if (response.success) {
          // Cập nhật biến trạng thái đăng nhập và thông tin người dùng
          this.isLoggedIn = true;
          this.user_name = response.user.user_name;

          // Lưu trạng thái đăng nhập vào Local Storage
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user_name', this.user_name);
          console.log(
            alert('Đăng nhập thành công'),
            'Đăng nhập thành công',
            response.user
          );
          location.assign('/home/homepage');
          // Lưu thông tin người dùng vào local storage hoặc state management nếu cần thiết
        } else {
          console.log(
            alert('Sai tên đăng nhập hoặc mật khẩu'),
            'Sai thông tin đăng nhập'
          );
        }
      },
      (error) => {
        console.error(
          alert('Sai tên đăng nhập hoặc mật khẩu'),
          'Lỗi đăng nhập',
          error
        );
      }
    );
  }
  register(): void {
    this.userService.register(this.myResult).subscribe(
      (response) => {
        console.log(alert('Đăng ký thành công mời bạn đang nhập'),'Product added successfully',response );
        location.assign('/login');
      },
      (error) => {
        console.error('Error adding product:', error);
        // Handle error scenario
      }
    );
  }

}
