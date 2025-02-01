# Modern Resume Generator

A modern, user-friendly resume generator built with Next.js 15 that creates ATS-friendly resumes. Features a live preview and easy PDF download functionality.

![Resume Generator Demo](/public/image.png)

## Features

- 📝 Real-time preview as you type
- 📱 Fully responsive design
- 🎯 ATS-friendly output
- 📄 PDF download option
- 🎨 Modern UI with shadcn/ui components
- 🌗 Clean and professional layout
- ⚡ Fast and interactive

### Form Sections

1. **Personal Information**

   - Name
   - Current Role
   - Email
   - Phone
   - LinkedIn URL
   - GitHub URL
   - Professional Summary

2. **Work Experience**

   - Company Name
   - Role/Position
   - Duration
   - Job Description
   - Add multiple entries

3. **Skills & Education**
   - Tag-based skill input
   - School/University
   - Degree
   - Graduation Year
   - Add multiple education entries

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**:
  - Tailwind CSS
  - shadcn/ui components
- **PDF Generation**: @react-pdf/renderer
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/resume-generator.git
```

2. Navigate to the project directory:

```bash
cd resume-generator
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
resume-generator/
├── app/
│   ├── page.tsx                 # Main page component
├── components/
│   └── ui/                     # shadcn/ui components
│   └── molecules
│   └──  ├── personal-info-form.tsx   # Personal information form
│   └──  ├── work-experience-form.tsx # Work experience form
│   └──  ├── skills-education-form.tsx# Skills and education form
│   └──  ├── resume-preview.tsx       # Live preview component
│   └──  └── resume-pdf.tsx          # PDF generation component
├── public/
└── ...
```

## Usage

1. Fill out the personal information in the first tab
2. Add your work experiences in the second tab
3. Input your skills and education in the third tab
4. Preview your resume in real-time on the right side
5. Click "Download Resume" to get your PDF version

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the look and feel by:

1. Modifying the `tailwind.config.js` file
2. Adjusting the styles in individual components
3. Customizing shadcn/ui theme variables

### PDF Template

The PDF output can be customized by modifying the `resume-pdf.tsx` file:

- Adjust margins and spacing
- Change fonts and colors
- Modify the layout structure

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Next.js](https://nextjs.org/) for the amazing framework
- [@react-pdf/renderer](https://react-pdf.org/) for PDF generation capabilities

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!

For any issues or feature requests, please use the [GitHub issue tracker](https://github.com/DikoMahendraa/ats-resume-generator/issues).

````

Let me also create a LICENSE file for the project:

```md project="Resume Generator" file="LICENSE.md" type="markdown"
MIT License

Copyright (c) 2024 Resume Generator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````
