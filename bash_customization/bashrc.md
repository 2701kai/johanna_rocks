# HowTo..

> amend your **git bash** in **vscode**

## Customize your .bashrc for repetitive gh - tasks

### 1. Edit .bashrc (e.g. with [sample snippets](#2-myfunctions--aliases-added))

```bash
# all-in-one sample cmd:
# sudo nano ~/.bashrc;source ~/.bashrc && sudo cp ~/.bashrc ~/backups/.bashrc_bak ; sudo cp ~/.bashrc ~/backups/.bashrc.txt

sudo cp ~/.bashrc ~/backups/.bashrc_bak # just in case..
sudo nano ~/.bashrc # save on exit
source ~/.bashrc    # update shell
sudo cp ~/.bashrc ~/backups/.bashrc.txt
```

### 2. myFunctions / aliases added

```bash
# ---------------------------
# GAC: Alt+G = Pre-fill commit message
# ---------------------------
git_add_commit_prefill() {
  READLINE_LINE="git add . && git commit -m ''"
  READLINE_POINT=28
}
bind -x '"\eg":git_add_commit_prefill'

# ---------------------------
# GAC: Typed command
# ---------------------------
gac() {
  git add .
  echo "Enter commit message:"
  read -r msg
  git commit -m "$msg"
}

# ---------------------------
# GACP: Alt+V or type `gacp`
# ---------------------------
gacp() {
  read -e -p "Commit message: " msg && git add . && git commit -m "$msg" && git push
}
bind -x '"\ev":gacp'

# ---------------------------
# Git alias - git push
# ---------------------------
alias gp='git push'
```

_cheeses, quite addictive.._

````bash
# ---------------------------
# GCMM: Merge current branch into `main`
# ---------------------------
gcmm() {
  current_branch=$(git symbolic-ref --short HEAD)

  if [ "$current_branch" = "main" ]; then
    echo "You're already on 'main'. Cannot merge 'main' into itself."
    return 1
  fi

  echo "Merging '$current_branch' into 'main'..."
  git checkout main && git merge "$current_branch"
}

# Alt + M to trigger
bind -x '"\em":gcmm'
```S
````
