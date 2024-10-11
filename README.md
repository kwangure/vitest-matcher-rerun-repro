https://github.com/vitest-dev/vitest/issues/6693 reproduction.

1. `pnpm install`
2. `pnpm run test`
3. Observe that browser test succeeds
4. In the UI, rerun tests. Observe that test fails.
5. Note that when you release `"{Alt>}"` using `{/Alt}"` test reruns now succeed.

Unreleased keys in previous runs are affect newer runs.
A similar situation happens with 2 consecutive tests. If test 1 doesn't
release key `"{Alt>}"`, test 2 is affected by `"{Alt>}"` being pressed.
Either cleanup unreleased keys _somehow_ after each test or improve isolation
_somehow_ between consecutive tests and watch-mode reruns.


