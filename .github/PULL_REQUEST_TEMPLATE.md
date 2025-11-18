# Pull Request

## Description

Please include a summary of the changes and the related issue. Include relevant motivation and context.

Fixes # (issue)

## Type of Change

Please delete options that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring
- [ ] Dependencies update
- [ ] Configuration change
- [ ] Other (please describe):

## Changes Made

Please provide a detailed description of the changes:

- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)

Add screenshots to demonstrate the changes, especially for UI modifications.

**Before:**
<!-- Add screenshot here -->

**After:**
<!-- Add screenshot here -->

## Testing

### Test Environment

- OS: [e.g. Windows 11, macOS 13.0, Ubuntu 22.04]
- Browser: [e.g. Chrome 120, Firefox 121, Safari 17]
- Node Version: [e.g. 18.17.0]
- npm Version: [e.g. 9.6.7]

### Test Cases

Please describe the tests that you ran to verify your changes:

1. Test case 1
2. Test case 2
3. Test case 3

### Test Coverage

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing completed
- [ ] All tests passing

```bash
# Test results
npm test
```

## Checklist

### Code Quality

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings or errors
- [ ] I have checked for TypeScript errors (`npm run type-check`)
- [ ] I have run the linter (`npm run lint`)

### Documentation

- [ ] I have made corresponding changes to the documentation
- [ ] I have updated the README.md if needed
- [ ] I have added/updated JSDoc comments for new functions
- [ ] I have updated the CHANGELOG.md

### Testing

- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] I have tested on multiple browsers (if UI changes)
- [ ] I have tested on mobile devices (if applicable)

### Dependencies

- [ ] I have checked that no new vulnerabilities are introduced (`npm audit`)
- [ ] I have updated package-lock.json if dependencies changed
- [ ] I have documented any new environment variables

### Git

- [ ] My commits follow the conventional commits specification
- [ ] I have rebased my branch on the latest main/develop branch
- [ ] I have resolved all merge conflicts
- [ ] My branch is up to date with the base branch

### Security

- [ ] I have not committed any sensitive information (API keys, passwords, etc.)
- [ ] I have not introduced any security vulnerabilities
- [ ] I have followed secure coding practices

## Breaking Changes

If this PR introduces breaking changes, please describe:

- What breaks
- Migration guide for users
- Deprecation warnings added

## Performance Impact

Describe any performance implications:

- [ ] Performance improved
- [ ] Performance unchanged
- [ ] Performance degraded (please justify)

## Dependencies Added/Updated

List any dependencies that were added or updated:

| Package | Version | Purpose |
|---------|---------|---------|
| example | 1.0.0   | Description |

## Deployment Notes

Are there any special deployment considerations?

- [ ] Environment variables need to be updated
- [ ] Database migrations required
- [ ] Configuration changes required
- [ ] Third-party service setup required

## Related Issues/PRs

- Closes #
- Related to #
- Depends on #

## Additional Notes

Add any additional notes, context, or concerns here.

## Reviewer Notes

Please pay special attention to:

- Area 1
- Area 2
- Area 3

## Post-Merge Actions

- [ ] Update documentation website
- [ ] Announce in discussions
- [ ] Update project board
- [ ] Other:

---

## For Maintainers

- [ ] Code review completed
- [ ] Tests verified
- [ ] Documentation reviewed
- [ ] Ready to merge
- [ ] Squash commits before merging
