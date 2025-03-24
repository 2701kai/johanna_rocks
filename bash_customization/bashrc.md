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
