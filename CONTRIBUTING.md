# Contributing to Next.js Full-Stack Template

Thank you for your interest in contributing! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- Git

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/nextjs-fullstack-template.git
cd nextjs-fullstack-template
```

3. Install dependencies:
```bash
npm install
```

4. Create a development environment file:
```bash
cp .env.example .env.local
```

5. Start the development server:
```bash
npm run dev
```

## 📋 How to Contribute

### Reporting Issues
- Use the GitHub issue tracker
- Provide clear, detailed descriptions
- Include steps to reproduce
- Add relevant labels

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Provide examples or mockups if possible

### Code Contributions

#### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

#### Commit Messages
Follow conventional commits:
- `feat: add new database provider support`
- `fix: resolve authentication redirect issue`
- `docs: update installation instructions`
- `refactor: improve database query helpers`

#### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Submit a pull request with:
   - Clear title and description
   - Reference related issues
   - Screenshots for UI changes

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Adding Tests
- Write tests for new features
- Ensure existing tests pass
- Aim for good test coverage

## 📝 Code Style

### TypeScript
- Use TypeScript for all new code
- Provide proper type definitions
- Avoid `any` types when possible

### Formatting
- Use Prettier for code formatting
- Follow ESLint rules
- Run `npm run lint` before committing

### Component Guidelines
- Use functional components with hooks
- Follow the established component patterns
- Add proper TypeScript interfaces
- Include JSDoc comments for complex functions

## 🗂️ Project Structure

When adding new features, follow the existing structure:

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── public/               # Static assets
└── scripts/              # Database scripts
```

## 🎯 Areas for Contribution

### High Priority
- Database provider integrations
- UI component improvements
- Performance optimizations
- Documentation updates

### Medium Priority
- Additional example pages
- Testing improvements
- Accessibility enhancements
- SEO optimizations

### Low Priority
- Code refactoring
- Minor UI tweaks
- Additional utilities

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## 🤝 Community

- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices
- Follow the code of conduct

## 📞 Getting Help

- Open an issue for bugs or questions
- Join discussions in existing issues
- Check the documentation first

Thank you for contributing to make this template better for everyone! 🎉
