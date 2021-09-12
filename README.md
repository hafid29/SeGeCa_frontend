# Frontend SeGeCa (reactJs)
Aplikasi penyewaan gedung dan catering. Aplikasi ini menggunakan reactJs dan library redux untuk manajemen state.

## 1. Developmnet Setup
Aplikasi ini menggunakan framework reactJs, sehingga secara umum memiliki kebutuhan sebagai berikut:
> - npm atau yarn
> - react Js

Sedangkan library untuk project:
> - Redux (Manajemen state)
> - Axios (HTTP Client)

## 2. Project Structure
    |--public
    |--src
        |-- componnent
        |-- redux
            |-- reducer
                |-- reducer.name_reducer.js
            |-- action
                |-- action.payload.js
                |-- action.nama_action.js
            |-- store
        |-- view
            |-- nama_halaman/view
            |-- index.js
        |--utils
            |-- constat.js
    |-- .gitignore
    |-- package.json
    |-- README.md
    |-- yarn.lock

## 3. Aturan commit dan push ke develop
> 1. Buat branch baru sesuai ticket di jira Ex: ES-nomor-jira
> 2. git checkout ke branch baru
> 3. git pull origin develop (pull di dalam branch yang baru di buat)
> 4. setelah selesai development atau mencoding
> 5. git add .
> 6. git commit -m "[no_ticket] keterangan pekerjaan [username git]"
> 7. git push origin nama_branch
> 8. buat pull request ke develop dan assign ke akun @aditya37 @hafid29
> 9. and happy coding

## Update local branch
> 1. git checkout develop
> 2. git pull origin develop

