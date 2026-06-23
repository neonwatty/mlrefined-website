# Conveyor Receipt

Ledger: `.codex-workers/workerctl.db`

Manager:

- `mlr-reimagining-manager`: MLR Reimagining Manager
  - Thread ID: `019eea5b-fc02-7f81-aaa5-d692561b2ffe`

Manager alias note:

- Conveyor rejected reusing the exact same manager session name across multiple
  tasks. The remaining bindings use task-specific manager aliases that all point
  to the same visible manager thread, `019eea5b-fc02-7f81-aaa5-d692561b2ffe`.

Workers:

- `mlr-homepage-visual-lab`: MLR Homepage Visual Lab Worker
  - Thread ID: `019eea5c-12ac-7e60-8a84-5e879d11de1f`
  - Task: `mlr-homepage-visual-lab-image-brief`
  - Binding: `binding-a4239d94-4ebd-428f-8887-e362b14b4ce9`
  - Manager session alias: `mlr-reimagining-manager`
- `mlr-visual-gallery`: MLR Visual Gallery Worker
  - Thread ID: `019eea5c-2cdc-7363-ba17-5361cd3dd6d5`
  - Task: `mlr-visual-gallery-image-brief`
  - Binding: `binding-f4a75dbc-70ff-4057-96e2-afb8e27c802c`
  - Manager session alias: `mlr-reimagining-manager-visual-gallery`
- `mlr-resource-discovery`: MLR Resource Discovery Worker
  - Thread ID: `019eea5c-41e7-75b1-afaa-6480b145c789`
  - Task: `mlr-resource-discovery-image-brief`
  - Binding: `binding-84fe15f8-0a8e-4c4e-aef3-aab14056c0e5`
  - Manager session alias: `mlr-reimagining-manager-resource-discovery`
- `mlr-instructor-path`: MLR Instructor Path Worker
  - Thread ID: `019eea5c-55a0-7bd0-8d10-78917acb16bb`
  - Task: `mlr-instructor-path-image-brief`
  - Binding: `binding-5b26d55c-5211-48e8-b98f-8780f7138653`
  - Manager session alias: `mlr-reimagining-manager-instructor-path`
- `mlr-reviews-adoption`: MLR Reviews Adoption Worker
  - Thread ID: `019eea5c-6d1e-7400-9ebd-de69077c3cb3`
  - Task: `mlr-reviews-adoption-image-brief`
  - Binding: `binding-0781a891-ef05-4485-8fb8-25537292a057`
  - Manager session alias: `mlr-reimagining-manager-reviews-adoption`

Status commands:

```bash
conveyor app-loop-status 'mlr-homepage-visual-lab-image-brief' --path .codex-workers/workerctl.db --json
conveyor app-loop-status 'mlr-visual-gallery-image-brief' --path .codex-workers/workerctl.db --json
conveyor app-loop-status 'mlr-resource-discovery-image-brief' --path .codex-workers/workerctl.db --json
conveyor app-loop-status 'mlr-instructor-path-image-brief' --path .codex-workers/workerctl.db --json
conveyor app-loop-status 'mlr-reviews-adoption-image-brief' --path .codex-workers/workerctl.db --json
```

The generic `conveyor status --path .codex-workers/workerctl.db` command is
not valid for this installed Conveyor CLI; it exits with
`Unsupported TypeScript runtime option for status`.

Ledger verification query:

```bash
sqlite3 -header -column .codex-workers/workerctl.db "SELECT t.name AS task,b.id AS binding,ms.name AS manager_alias,ms.codex_app_thread_id AS manager_thread,ws.name AS worker,ws.codex_app_thread_id AS worker_thread FROM bindings b JOIN tasks t ON t.id=b.task_id JOIN sessions ms ON ms.id=b.manager_session_id JOIN sessions ws ON ws.id=b.worker_session_id ORDER BY t.name;"
```
