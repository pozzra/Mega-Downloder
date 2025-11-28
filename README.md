# MEGA DOWNLOADER v10.5 - Website

គម្រោងនេះគឺជា Landing Page សម្រាប់លក់កម្មវិធី Mega Downloader v10.5។

## របៀបដំណើរការ (Setup)

1. ដំឡើងកម្មវិធីជំនួយ (Dependencies):
   ```bash
   npm install
   ```

2. ដំណើរការគេហទំព័រ (Run Development Server):
   ```bash
   npm run dev
   ```

---

## ដំណោះស្រាយបញ្ហា (Troubleshooting)

### Error: "npm.ps1 cannot be loaded because running scripts is disabled"

ប្រសិនបើអ្នកឃើញអក្សរពណ៌ក្រហមនេះនៅក្នុង PowerShell សូមអនុវត្តតាមជំហាននេះ៖

1. ដំណើរការ Command នេះនៅក្នុង PowerShell:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
2. វាយអក្សរ `A` (Yes to All) រួចចុច Enter។
3. សាកល្បង `npm run dev` ម្ដងទៀត។

*ចំណាំ: អ្នកក៏អាចប្រើ **Command Prompt (CMD)** ជំនួស PowerShell បានដែរ។*

---

## ការកំណត់ API Key (Environment Variables)

ដើម្បីដាក់ API Key របស់អ្នកចូលទៅក្នុងគម្រោង (សម្រាប់ប្រើប្រាស់ AI ថ្ងៃក្រោយ):

1. បង្កើតឯកសារថ្មីមួយឈ្មោះ `.env` នៅកន្លែងតែមួយជាមួយ `package.json`។
2. សរសេរកូដនេះចូល៖

   ```env
   API_KEY=AIzaSyC5hM3CiJrsXz9YafGZigrteBYHG-Frpe4
   ```

3. Save ឯកសារ។

*ចំណាំ: បច្ចុប្បន្ន Website នេះជា Static UI វាមិនទាន់ប្រើប្រាស់ API Key នេះនៅឡើយទេ រហូតដល់អ្នកបន្ថែមមុខងារ AI ជាក់ស្តែង។*
# Mega-Downloder
