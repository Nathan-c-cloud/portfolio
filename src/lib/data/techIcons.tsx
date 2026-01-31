// Mapping technologies to their Devicon classes
// Devicon uses the format: devicon-<name>-<type>
// Available types: plain, original, line

export const deviconClasses: Record<string, string> = {
  // Development
  'Java': 'devicon-java-plain colored',
  'Kotlin': 'devicon-kotlin-plain colored',
  'Angular': 'devicon-angular-plain colored',
  'TypeScript': 'devicon-typescript-plain colored',
  'React': 'devicon-react-original colored',
  'Python': 'devicon-python-plain colored',
  'C++': 'devicon-cplusplus-plain colored',
  'C#': 'devicon-csharp-plain colored',
  'GO': 'devicon-go-original-wordmark colored',
  'C': 'devicon-c-plain colored',

  // Databases
  'PostgreSQL': 'devicon-postgresql-plain colored',
  'SQLite': 'devicon-sqlite-plain colored',
  'MongoDB': 'devicon-mongodb-plain colored',

  // DevOps & Cloud
  'AWS': 'devicon-amazonwebservices-plain-wordmark colored',
  'GCP': 'devicon-googlecloud-plain colored',
  'Terraform': 'devicon-terraform-plain colored',
  'Docker': 'devicon-docker-plain colored',
  'Kubernetes': 'devicon-kubernetes-plain colored',
  'GitHub Actions': 'devicon-github-original colored',
  'GitLab CI/CD': 'devicon-gitlab-plain colored',

  // Quality & Testing
  'SonarQube': 'devicon-sonarqube-plain colored',
  'Playwright': 'devicon-playwright-plain colored',
  'Design Patterns': 'devicon-composer-line colored',
  'TDD': 'devicon-pytest-plain colored',

  // Project Management
  'Azure DevOps': 'devicon-azure-plain colored',
  'Jira': 'devicon-jira-plain colored',

  // AI Tools (use generic icons if not available)
  'GitHub Copilot': 'devicon-github-original colored',
  'Claude Code': 'devicon-anthropic-plain colored',
  'Gemini CLI': 'devicon-google-plain colored',
  'Cursor': 'devicon-vscode-plain colored',
  'Manus': 'devicon-bash-plain colored',
};

// Fallback colors if colored doesn't work
export const techColors: Record<string, string> = {
  'Java': '#007396',
  'Kotlin': '#7F52FF',
  'Angular': '#DD0031',
  'TypeScript': '#3178C6',
  'React': '#61DAFB',
  'Python': '#3776AB',
  'C++': '#00599C',
  'C#': '#239120',
  'GO': '#00ADD8',
  'C': '#A8B9CC',
  'PostgreSQL': '#4169E1',
  'SQLite': '#003B57',
  'MongoDB': '#47A248',
  'AWS': '#FF9900',
  'GCP': '#4285F4',
  'Terraform': '#7B42BC',
  'Docker': '#2496ED',
  'Kubernetes': '#326CE5',
  'GitHub Actions': '#2088FF',
  'GitLab CI/CD': '#FC6D26',
  'SonarQube': '#4E9BCD',
  'Playwright': '#2EAD33',
  'Azure DevOps': '#0078D7',
  'Jira': '#0052CC',
};
