# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Reporting a Vulnerability

The Asisten Sebaya team and community take security bugs seriously. We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.

### Where to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **Email**: Send an email to [security@asistensebaya.com] (or the project maintainer's email)
2. **GitHub Security Advisory**: Use the [GitHub Security Advisory](https://github.com/IRedDragonICY/asistensebaya/security/advisories/new) feature
3. **Private Disclosure**: Contact the maintainers privately through GitHub

### What to Include

To help us better understand the nature and scope of the possible issue, please include as much of the following information as possible:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Resolution Target**: 90 days for critical issues

### What to Expect

After you submit a report, here's what will happen:

1. **Acknowledgment**: We'll acknowledge receipt of your vulnerability report within 48 hours
2. **Investigation**: Our team will investigate the issue and determine its severity
3. **Updates**: We'll keep you informed of our progress
4. **Fix Development**: We'll develop a fix for the vulnerability
5. **Disclosure**: We'll coordinate with you on the timing of public disclosure
6. **Credit**: With your permission, we'll publicly acknowledge your responsible disclosure

## Security Best Practices for Users

### API Key Management

- **Never commit API keys** to version control
- Store API keys in environment variables or secure vaults
- Use `.env.local` files (already in `.gitignore`)
- Rotate API keys regularly
- Use separate API keys for development and production

### Environment Variables

Required environment variables:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

**Important**: Never expose these variables in client-side code or commits.

### Deployment Security

When deploying Asisten Sebaya:

1. **HTTPS Only**: Always use HTTPS in production
2. **Environment Isolation**: Keep development and production environments separate
3. **Regular Updates**: Keep all dependencies up to date
4. **Access Control**: Implement proper authentication and authorization
5. **Input Validation**: Validate and sanitize all user inputs
6. **Rate Limiting**: Implement rate limiting for API endpoints
7. **Monitoring**: Set up security monitoring and alerting

### Dependency Security

We use automated tools to scan for vulnerable dependencies:

- **npm audit**: Run `npm audit` regularly to check for vulnerabilities
- **Dependabot**: Automated dependency updates
- **Snyk**: Continuous security scanning

Run security checks:

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# For breaking changes
npm audit fix --force
```

## Known Security Considerations

### Client-Side Security

- The application runs in the browser and should never handle sensitive data without encryption
- API keys are loaded client-side - ensure proper key restrictions in Google Cloud Console
- Implement Content Security Policy (CSP) headers in production

### AI Model Security

- User inputs are sent to Google Gemini API - ensure compliance with data privacy regulations
- Implement input sanitization to prevent prompt injection attacks
- Monitor API usage for unusual patterns

### Third-Party Dependencies

We regularly audit our dependencies for security issues. Current key dependencies:

- React 19.2.0
- Vite 6.2.0
- TypeScript 5.8.2
- Google Gemini AI 1.28.0
- Tailwind CSS 4.1.16

## Security Updates

We will notify users about security updates through:

1. **GitHub Security Advisories**
2. **Release Notes**
3. **CHANGELOG.md**
4. **Email notifications** (for critical issues)

### Subscribing to Security Updates

- **Watch** this repository on GitHub
- Enable **Security alerts** in your GitHub notification settings
- Check the [Security Advisories](https://github.com/IRedDragonICY/asistensebaya/security/advisories) page regularly

## Vulnerability Disclosure Policy

We follow a coordinated disclosure process:

1. **Report Received**: Vulnerability reported to our team
2. **Confirmation**: We confirm the vulnerability (within 7 days)
3. **Fix Development**: We develop and test a fix (target: 30-90 days)
4. **Pre-disclosure**: We notify affected users before public disclosure
5. **Public Disclosure**: We publicly disclose the vulnerability and fix
6. **Recognition**: We credit the reporter (unless they prefer to remain anonymous)

### Embargo Period

We typically request a 90-day embargo period from initial report to public disclosure. This allows us time to:

- Develop and test a fix
- Release the patch
- Give users time to update

## Bug Bounty Program

Currently, we do not have a paid bug bounty program. However, we greatly appreciate security researchers who responsibly disclose vulnerabilities and will:

- Publicly acknowledge your contribution (with your permission)
- Add you to our security hall of fame
- Provide a detailed thank you in our release notes

## Scope

### In Scope

- Authentication and authorization issues
- Data exposure vulnerabilities
- XSS, CSRF, and injection vulnerabilities
- Security misconfigurations
- API security issues
- Dependency vulnerabilities

### Out of Scope

- Social engineering attacks
- Physical attacks
- Denial of Service (DoS) attacks
- Issues requiring physical access to a user's device
- Issues in third-party services (report directly to the service provider)
- Recently disclosed vulnerabilities (give us time to patch)

## Compliance

We strive to comply with:

- **GDPR**: General Data Protection Regulation
- **CCPA**: California Consumer Privacy Act
- **OWASP Top 10**: Web application security risks
- **CWE Top 25**: Most dangerous software weaknesses

## Security Tools We Use

- **npm audit**: Dependency vulnerability scanning
- **Dependabot**: Automated dependency updates
- **CodeQL**: Static code analysis
- **ESLint**: Code quality and security linting
- **TypeScript**: Type safety to prevent common errors

## Contact

For any security-related questions or concerns, please contact:

- **Security Email**: [INSERT SECURITY EMAIL]
- **GitHub Security**: [Security Advisories](https://github.com/IRedDragonICY/asistensebaya/security/advisories)
- **Project Maintainer**: [@IRedDragonICY](https://github.com/IRedDragonICY)

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Google Security Best Practices](https://cloud.google.com/security/best-practices)
- [React Security Best Practices](https://reactjs.org/docs/security.html)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

**Last Updated**: 2025-01-18

Thank you for helping keep Asisten Sebaya and our users safe!
