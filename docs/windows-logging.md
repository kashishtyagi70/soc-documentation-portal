---
title: Windows Logging
---

# Windows Logging Guide

## Important Windows Event IDs

| Event ID | Description |
|---|---|
| 4688 | Process Creation |
| 4104 | PowerShell Logging |
| 4624 | Successful Login |
| 4625 | Failed Login |
| 1102 | Audit Logs Cleared |

---

## Detection Recommendations

- Enable PowerShell Script Block Logging
- Enable Process Creation auditing
- Install Sysmon
- Monitor encoded PowerShell commands