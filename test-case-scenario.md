# Berikut adalah contoh Test Case
### Test Case TC001 : Login Dengan Email dan Password Valid
| Test Case ID | Deskripsi | Langkah | Input | Expected Result |
|--------------|-----------|---------|-------|-----------------|
| TC001 | Unauthenticated User dapat login dengan email dan password valid | <ol><li>Buka halaman login</li><li>Input field email dengan value yang valid</li><li>Input field password dengan value yang valid</li><li>Klik tombol "Login"</li></ol> | Email: superadmin@gmail.com <br>Password: Password123! | User berhasil login dan diarahkan ke dashboard |
### Test Case TC002 : Login Dengan Format Email Case Insensitive
| Test Case ID | Deskripsi | Langkah | Input | Expected Result |
|--------------|-----------|---------|-------|-----------------|
| TC002 | Unauthenticated User dapat Login dengan format email case insensitive | <ol><li>Buka halaman login</li><li>Input field email dengan case insentitive</li><li>Input field password dengan value yang valid</li><li>Klik tombol "Login"</li></ol> | Email: SuperAdmin@gmail.com <br>Password: Password123! | User berhasil login dan diarahkan ke dashboard |
### Test Case TC003 : Login Dengan Email dan Password Kosong
| Test Case ID | Deskripsi | Langkah | Input | Expected Result |
|--------------|-----------|---------|-------|-----------------|
| TC003 | Unauthenticated User tidak dapat login dengan email dan password kosong | <ol><li>Buka halaman login</li><li>Kosongkan field email</li><li>Kosongkan field password</li><li>Klik tombol "Login"</li></ol> | Email:<br>Password: Password123!! | Sistem menampilkan validation alert "Email wajib diisi!" pada field email dan "Password wajib diisi!" pada field password |
### Test Case TC004 : Login Dengan Email Tidak Valid
| Test Case ID | Deskripsi | Langkah | Input | Expected Result |
|--------------|-----------|---------|-------|-----------------|
| TC004 | Unauthenticated User tidak dapat login dengan email tidak valid | <ol><li>Buka halaman login</li><li>Input field email dengan value yang tidak valid</li><li>Input field password dengan value yang valid</li><li>Klik tombol "Login"</li></ol> | Email: superadmin@gmail <br>Password: Password123! | Sistem menampilkan validation alert "Format email tidak valid!" |
### Test Case TC005 : Login Dengan Password Salah
| Test Case ID | Deskripsi | Langkah | Input | Expected Result |
|--------------|-----------|---------|-------|-----------------|
| TC005 | Unauthenticated User tidak dapat login dengan password salah | <ol><li>Buka halaman login</li><li>Input field email dengan value yang tidak valid</li><li>Input field password dengan value yang tidak valid</li><li>Klik tombol "Login"</li></ol> | Email: superadmin@gmail <br>Password: passwordsalah | Sistem menampilkan error alert "Username atau Password salah!" |

# Berikut adalah contoh Test Scenario
### Test Scenario TS001 : Uji Proses Login User
| Test Case ID | Deskripsi | Type | Langkah | Input | Expected Result |
|--------------|-----------|------|---------|-------|-----------------|
| TC001 | Unauthenticated User dapat login dengan email dan password valid | Positive | <ol><li>Buka halaman login</li><li>Input field email dengan value yang valid</li><li>Input field password dengan value yang valid</li><li>Klik tombol "Login"</li></ol> | Email: superadmin@gmail.com <br>Password: Password123! | User berhasil login dan diarahkan ke dashboard |
| TC002 | Unauthenticated User dapat Login dengan format email case insensitive | Positive | <ol><li>Buka halaman login</li><li>Input field email dengan case insentitive</li><li>Input field password dengan value yang valid</li><li>Klik tombol "Login"</li></ol> | Email: SuperAdmin@gmail.com <br>Password: Password123! | User berhasil login dan diarahkan ke dashboard |
| TC003 | Unauthenticated User tidak dapat login dengan email dan password kosong | Negative | <ol><li>Buka halaman login</li><li>Kosongkan field email</li><li>Kosongkan field password</li><li>Klik tombol "Login"</li></ol> | Email:<br>Password: Password123!! | Sistem menampilkan validation alert "Email wajib diisi!" pada field email dan "Password wajib diisi!" pada field password |
| TC004 | Unauthenticated User tidak dapat login dengan password salah | Negative | <ol><li>Buka halaman login</li><li>Input field email dengan value yang tidak valid</li><li>Input field password dengan value yang tidak valid</li><li>Klik tombol "Login"</li></ol> | Email: superadmin@gmail <br>Password: passwordsalah | Sistem menampilkan error alert "Username atau Password salah!" |
| TC005 | Unauthenticated User tidak dapat login dengan password salah | Negative | <ol><li>Buka halaman login</li><li>Input field email dengan value yang tidak valid</li><li>Input field password dengan value yang tidak valid</li><li>Klik tombol "Login"</li></ol> | Email: superadmin@gmail <br>Password: passwordsalah | Sistem menampilkan error alert "Username atau Password salah!" |
