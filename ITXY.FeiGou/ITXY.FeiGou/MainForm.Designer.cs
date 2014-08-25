namespace ITXY.FeiGou
{
    partial class MainForm
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.btnSend = new System.Windows.Forms.Button();
            this.textHistory = new System.Windows.Forms.TextBox();
            this.textMsg = new System.Windows.Forms.TextBox();
            this.textUser = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // btnSend
            // 
            this.btnSend.Location = new System.Drawing.Point(350, 334);
            this.btnSend.Name = "btnSend";
            this.btnSend.Size = new System.Drawing.Size(75, 23);
            this.btnSend.TabIndex = 0;
            this.btnSend.Text = "发送";
            this.btnSend.UseVisualStyleBackColor = true;
            this.btnSend.Click += new System.EventHandler(this.btnSend_Click);
            // 
            // textHistory
            // 
            this.textHistory.Location = new System.Drawing.Point(23, 12);
            this.textHistory.Multiline = true;
            this.textHistory.Name = "textHistory";
            this.textHistory.ReadOnly = true;
            this.textHistory.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.textHistory.Size = new System.Drawing.Size(402, 288);
            this.textHistory.TabIndex = 1;
            // 
            // textMsg
            // 
            this.textMsg.Location = new System.Drawing.Point(23, 334);
            this.textMsg.Name = "textMsg";
            this.textMsg.Size = new System.Drawing.Size(307, 21);
            this.textMsg.TabIndex = 1;
            // 
            // textUser
            // 
            this.textUser.Location = new System.Drawing.Point(441, 12);
            this.textUser.Multiline = true;
            this.textUser.Name = "textUser";
            this.textUser.ReadOnly = true;
            this.textUser.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.textUser.Size = new System.Drawing.Size(100, 288);
            this.textUser.TabIndex = 2;
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(553, 378);
            this.Controls.Add(this.textUser);
            this.Controls.Add(this.textMsg);
            this.Controls.Add(this.textHistory);
            this.Controls.Add(this.btnSend);
            this.Name = "MainForm";
            this.Text = " 六道聊天";
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.MainForm_FormClosed);
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnSend;
        private System.Windows.Forms.TextBox textHistory;
        private System.Windows.Forms.TextBox textMsg;
        private System.Windows.Forms.TextBox textUser;
    }
}

